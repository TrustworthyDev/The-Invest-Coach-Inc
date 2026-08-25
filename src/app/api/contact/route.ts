import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  services?: string[];
  company_url?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: quietly accept so bots don't learn they were filtered.
  if (body.company_url) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const services = Array.isArray(body.services) ? body.services.slice(0, 10) : [];

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10 || services.length === 0) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone: (body.phone ?? "").trim().slice(0, 40),
    company: (body.company ?? "").trim().slice(0, 120),
    website: (body.website ?? "").trim().slice(0, 200),
    budget: (body.budget ?? "").slice(0, 60),
    timeline: (body.timeline ?? "").slice(0, 60),
    services,
    message: message.slice(0, 5000),
  };

  // TODO: connect a delivery provider (Resend, SendGrid, HubSpot, or a CRM webhook).
  // Set CONTACT_WEBHOOK_URL to forward submissions without writing provider code.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[contact] webhook delivery failed", error);
      return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
    }
  } else {
    console.info("[contact] new submission (no CONTACT_WEBHOOK_URL configured)", submission);
  }

  return NextResponse.json({ ok: true });
}

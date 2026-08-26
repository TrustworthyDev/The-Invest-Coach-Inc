/**
 * Single source of truth for site-wide copy and navigation.
 * Every string here is transcribed from the client's rough-draft structure pages,
 * so edits to wording happen in one place instead of across components.
 */

export const company = {
  name: "The Invest Coach, Inc.",
  shortName: "The Invest Coach",
  tagline: "Strategy. Innovation. Growth.",
  phone: "",
  email: "info@theinvestcoach.com",
  address: {
    line1: "12550 Biscayne Blvd",
    line2: "N. Miami, FL 33181",
  },
  yearsExperience: "35+",
} as const;

export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const pillars = [
  {
    slug: "ai-automation",
    number: "01",
    name: "AI Automation",
    navBlurb: "Smarter systems that save time and cut costs",
    headline: "Smarter Systems That Save Time, Reduce Costs & Increase Productivity",
    intro: [
      "Artificial Intelligence is transforming the way businesses operate. Our AI Automation solutions help companies eliminate repetitive tasks, streamline operations, improve customer experiences, and free teams to focus on higher-value work.",
      "From intelligent workflows to AI-powered assistants, we help businesses integrate practical automations that deliver measurable results.",
    ],
    services: [
      "AI Agents",
      "Workflow Automation",
      "CRM Automation",
      "Customer Support Automation",
      "Marketing Automation",
      "E-Mail Automation",
    ],
    outcomes: [
      { stat: "24/7", label: "Always-on assistants that never miss a lead" },
      { stat: "Hours", label: "Reclaimed every week from repetitive tasks" },
      { stat: "One", label: "Connected system instead of scattered tools" },
    ],
  },
  {
    slug: "business-consulting",
    number: "02",
    name: "Business Consulting",
    navBlurb: "Clear strategy, efficient operations, better decisions",
    headline: "Strategy, Systems & Decisions That Build Lasting Profitability",
    intro: [
      "Every successful business begins with a clear strategy, efficient operations, and informed decision-making. At The Invest Coach, we work alongside business owners to identify opportunities, eliminate inefficiencies, and build customized growth strategies designed to increase profitability, improve productivity, and create long-term sustainability.",
      "Whether you're launching a new business, expanding into new markets, or overcoming operational challenges, we provide practical guidance backed by decades of real-world business experience.",
      "We specialize in uncovering overlooked opportunities to help your company identify hidden revenue.",
    ],
    services: [
      "Business Strategy",
      "Growth Planning",
      "Operations Optimization",
      "Executive Coaching",
      "Process Improvement",
      "Performance Analysis",
    ],
    outcomes: [
      { stat: "35+", label: "Years of real-world business experience" },
      { stat: "Custom", label: "Strategy built around your objectives" },
      { stat: "Hidden", label: "Revenue uncovered in what you already own" },
    ],
  },
  {
    slug: "website-development",
    number: "03",
    name: "Website Development",
    navBlurb: "Modern websites designed to convert",
    headline: "Modern Websites Designed to Convert Visitors Into Customers",
    intro: [
      "Your website is often your first opportunity to make a lasting impression. We build professional, high-performing websites that not only look exceptional but are strategically designed to generate leads, build credibility, and support business growth.",
      "Every website is developed with speed, responsiveness, search engine optimization, user experience, and future scalability in mind. Whether you need a simple business website or a fully customized digital platform, we create websites that work as powerful marketing assets.",
    ],
    services: [
      "Custom Website Design",
      "Landing Pages",
      "Website Redesign",
      "Mobile Optimization",
      "SEO-Friendly Development",
      "Website Maintenance",
    ],
    outcomes: [
      { stat: "Fast", label: "Built for speed on every device" },
      { stat: "SEO", label: "Search-friendly from the first line of code" },
      { stat: "Scale", label: "Ready for the next stage of your business" },
    ],
  },
  {
    slug: "content-creation",
    number: "04",
    name: "Expert Content Creation",
    navBlurb: "The key to converting visitors into customers",
    headline: "Expert Content Is the Backbone of Every Successful Digital Strategy",
    intro: [
      "Every successful digital marketing strategy begins with exceptional content. From websites and blogs to videos, social media, and email campaigns to news articles and AI-powered marketing assets, we create compelling content that builds trust, improves search visibility, strengthens your brand, and turns prospects into loyal customers.",
      "It's the key to converting visitors into customers.",
    ],
    services: [
      "Web Site Content",
      "SEO News Articles",
      "Blog Posts & Pod-Cast",
      "Social Media Content",
      "Video Scripts & Production",
      "Email Marketing",
    ],
    outcomes: [
      { stat: "Trust", label: "Content that earns credibility before the call" },
      { stat: "Rank", label: "Search visibility that compounds over time" },
      { stat: "Voice", label: "One consistent brand across every channel" },
    ],
  },
  {
    slug: "lead-generation",
    number: "05",
    name: "Lead Generation",
    navBlurb: "A predictable pipeline of qualified leads",
    headline: "Consistent Lead Generation That Fuels Sustainable Business Growth",
    intro: [
      "Every growing business depends on a predictable flow of qualified leads. We build comprehensive lead generation systems that consistently attract potential customers, nurture relationships, and convert prospects into paying clients.",
      "Instead of relying on one marketing tactic, we create multi-channel lead generation strategies that combine digital marketing, automation, optimized websites, content, and analytics to deliver measurable results.",
      "Our goal is simple: help you build a reliable sales pipeline that supports long-term growth.",
    ],
    services: [
      "Lead Generation Campaigns",
      "Sales Funnels",
      "Landing Page Optimization",
      "Email Marketing",
      "Marketing Automation",
      "Conversion Optimization",
    ],
    outcomes: [
      { stat: "Multi", label: "Channel strategy instead of one fragile tactic" },
      { stat: "Qualified", label: "Leads that match who you actually serve" },
      { stat: "Pipeline", label: "Predictable flow you can plan around" },
    ],
  },
] as const;

export type Pillar = (typeof pillars)[number];

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: pillars.map((p) => ({
      label: p.name,
      href: `/services/${p.slug}`,
      blurb: p.navBlurb,
    })),
  },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "Our Mission", href: "/mission" },
  { label: "Our Story", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
];

/** Four-step framework, shown as horizontal connected cards per the client's note. */
export const processSteps = [
  {
    number: "1",
    kicker: "Discover",
    title: "Book a Call & Let's Talk",
    summary:
      "Schedule a complimentary discovery consultation so we can learn about your business, your goals, and the challenges you're looking to solve.",
    points: ["Understand Your Business", "Identify Your Goals", "Discover Growth Opportunities"],
  },
  {
    number: "2",
    kicker: "Strategize",
    title: "Build Your Growth Strategy",
    summary:
      "After learning about your business, we'll recommend a customized strategy based on your objectives — not a one-size-fits-all solution.",
    points: [
      "Business Consulting",
      "Website Development",
      "AI Automation",
      "Expert Content Creation",
      "Lead Generation",
    ],
    pointsLabel: "Choose one service or combine multiple solutions:",
  },
  {
    number: "3",
    kicker: "Implement",
    title: "Execute the Plan",
    summary:
      "Once you're ready, we'll begin implementing your customized growth strategy while keeping you informed every step of the way.",
    points: ["Clear Communication", "Professional Execution", "Measurable Progress"],
  },
  // {
  //   number: "4",
  //   kicker: "Scale",
  //   title: "Grow & Scale — Follow-Up",
  //   summary:
  //     "Our partnership doesn't end at launch. We continuously refine, optimize, and improve your strategy to help your business stay ahead of the competition.",
  //   points: ["Better Performance", "Smarter Decisions", "Sustainable Growth"],
  // },
] as const;

export const mission = {
  title: "Our Mission",
  headline: "Empowering Businesses Through Innovation, Strategy & Technology",
  body: [
    "Our mission is to help businesses unlock their full potential by providing strategic consulting, innovative technology, AI-powered solutions, and results-driven digital marketing that fuel sustainable growth.",
    "We are committed to helping entrepreneurs and business owners make smarter decisions, improve operational efficiency, attract more customers, and build organizations that are prepared for the future.",
    "Through education, collaboration, and innovation, we strive to become a trusted partner in every stage of our clients' growth journey.",
  ],
  principles: [
    {
      title: "Technology should empower people",
      body: "Not replace them. Automation exists to give your team back the hours that matter.",
    },
    {
      title: "Marketing should generate results",
      body: "Measurable business results — not just clicks and impressions.",
    },
    {
      title: "Every investment should compound",
      body: "Long-term growth, stronger customer relationships, and sustainable success.",
    },
  ],
} as const;

export const story = {
  title: "Our Story",
  headline: "Built on Years of Experience. Driven by Purpose.",
  body: [
    "Every successful business has a story — and so do we.",
    "The Invest Coach, Inc. wasn't created overnight. It was built from decades of real-world entrepreneurial experience, learning, adapting, overcoming challenges, and discovering what truly drives long-term business success.",
    "For more than 35 years, we've worked across multiple industries, building businesses, developing strategic partnerships, leading teams, solving complex business challenges, and helping companies identify new opportunities for growth. Along the way, we've experienced both successes and setbacks — giving us firsthand insight into the realities that business owners face every day.",
    "Like many entrepreneurs, we've learned that success isn't determined by working harder alone. It comes from having the right strategy, the right systems, the right technology, and the ability to adapt as markets evolve.",
    "That realization became the foundation of The Invest Coach, Inc.",
    "Today, businesses face more competition than ever before. Artificial Intelligence, automation, digital marketing, search engines, and changing consumer expectations are transforming nearly every industry. While these changes create incredible opportunities, they can also feel overwhelming for business owners trying to keep up.",
    "That's where we come in. The Invest Coach was created to simplify that journey.",
    "We help entrepreneurs and growing businesses navigate today's digital landscape by combining strategic business consulting with modern marketing, website development, AI-powered automation, expert content creation, and lead generation — all working together as one integrated growth system.",
  ],
  closing: [
    "We don't believe in one-size-fits-all solutions. Every business has its own vision, challenges, strengths, and opportunities. That's why we take the time to understand your goals before recommending strategies designed specifically for your business.",
    "As technology continues to evolve, our commitment remains the same — to provide honest guidance, innovative solutions, and practical strategies that help businesses grow smarter, faster, and with greater confidence.",
    "Whether you're launching your first business, expanding into new markets, modernizing your operations, or preparing for the next stage of growth, we're here to help you build something that lasts.",
  ],
  measure:
    "Helping your business become stronger, more profitable, and better positioned for the future.",
  signOff: ["Your success is our mission.", "Your growth is our purpose.", "And your future starts today."],
} as const;

export const faqs = [
  {
    q: "What exactly does The Invest Coach do?",
    a: "We combine strategic business consulting with modern marketing, website development, AI-powered automation, expert content creation, and lead generation — all working together as one integrated growth system rather than five disconnected vendors.",
  },
  {
    q: "Do I have to buy all five services?",
    a: "No. You can choose a single service or combine multiple solutions. After the discovery call we recommend a strategy based on your objectives, and you decide what to move forward with.",
  },
  {
    q: "What happens on the free strategy session?",
    a: "In about 30 minutes we'll help identify opportunities to grow your business, improve your online presence, and develop a strategy tailored to your goals. There is no cost and no obligation.",
  },
  {
    q: "How is AI Automation different from the software I already use?",
    a: "Most software stores information. Automation acts on it — routing leads, answering routine questions, following up, updating your CRM, and handing your team only the work that needs a human.",
  },
  {
    q: "How long does a website project take?",
    a: "It depends on scope. A focused landing page moves quickly; a fully customized platform takes longer. We give you a realistic timeline before any work begins and keep you informed at every step.",
  },
  {
    q: "What happens after the project launches?",
    a: "Our partnership doesn't end at launch. We continuously refine, optimize, and improve your strategy so your business stays ahead of the competition.",
  },
  {
    q: "Do you work with businesses outside of Florida?",
    a: "Yes. We're based in North Miami and work with clients remotely across industries and locations.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They started with our strategy, not a sales pitch. Six months later our operations are leaner and we finally know which marketing actually pays for itself.",
    name: "Client Name",
    role: "Owner, Service Business",
  },
  {
    quote:
      "The automation work alone gave our team back most of a day every week. Follow-ups happen now whether or not anyone remembers to send them.",
    name: "Client Name",
    role: "Founder, B2B Company",
  },
  {
    quote:
      "The new site looks like the business we've become, and it brings in qualified calls instead of tire-kickers.",
    name: "Client Name",
    role: "Managing Partner",
  },
] as const;

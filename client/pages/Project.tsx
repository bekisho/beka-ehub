import { useParams, Link } from "react-router-dom";

type Project = {
  title: string;
  image: string;
  description: string;
  tools: string[];
  role: string;
  outcomes: string;
};

const PROJECTS: Record<string, Project> = {
  pro1: {
    title: "Healthcare Appointment App – UI/UX Design",
    image: "/ast/beka.do1.jpg",
    description:
      "A simple and friendly mobile app that helps people find doctors and book appointments without stress. I focused on clear layouts, smooth flows, and a calm design so users feel comfortable from sign-up to booking. Clean UI, easy navigation, and trust-first experience.",
    tools: ["Figma"],
    role: "End‑to‑end product design: research, IA, visual system, prototyping, testing, handoff",
    outcomes: "Task success +32%, time‑on‑task −18%, adoption of key workflows +22%",
  },
  pro2: {
    title: "Digital Wallet & Finance App – UI/UX Design",
    image: "/ast/beka.bl2.jpg",
    description:
      "A modern dark-mode finance app designed to help users manage money easily and securely. Focused on smooth onboarding, clear transactions, and simple insights, the design makes everyday payments and tracking feel effortless and intuitive. Clean UI, easy navigation, and trust-first experience.",
    tools: ["Figma", ],
    role: "Journey mapping, empty states, email + in‑app flows, prototype validation",
    outcomes: "Activation +18%, support tickets −12% within first 30 days",
  },
  pro3: {
    title: "AI Assistant Chat App – UI/UX Design",
    image: "/ast/beka.ai3.jpg",
    description:
      "A friendly AI chat app designed to feel simple, helpful, and human. Focused on smooth onboarding, clear conversations, and quick actions, the interface makes interacting with AI feel natural and easy from the first tap.",
    tools: ["Figma", "Usability Testing"],
    role: "Audit, wireframes, UI polish, prototype, moderated tests",
    outcomes: "Checkout conversion +11%, cart abandonment −9%",
  },
  pro4: {
    title: "Mill Online Shop (Mobile E-commerce App)",
    image: "/ast/beka.mi4.jpg",
    description:
      "A personalized mobile commerce app with smart search, clean product grid, and bottom navigation. Designed for ease of browsing and fast purchases on the go.",
    tools: ["Figma",],
    role: "Design tokens, components, guidelines, contribution model",
    outcomes: "Build velocity +25%, UI defects −30%",
  },
  pro5: {
    title: "Multi-Industry Web UI Collection – UI/UX Design",
    image: "/ast/beka.ln5.jpg",
    description:
      "A set of modern web interfaces designed across different industries, including dashboards, tech startups, skincare e-commerce, and real estate. Each layout focuses on clear structure, strong visuals, and smooth user experience while keeping the design clean, human, and easy to navigate.",
    tools: ["Figma", "Prototyping"],
    role: "Research synthesis, IA, visual design, prototype",
    outcomes: "Completion rate +14%, NPS +9",
  },
  pro6: {
    title: "VisionCraft (Creative Agency Website)",
    image: "/ast/beka.pro 56.jpg",
    description:
      "A modern portfolio site for a video editing business. It features services, client works, and collaborations with a comprehensible layout and engaging visuals.",
    tools: ["Figma"],
    role: "Content structure, art direction, component library",
    outcomes: "Donation conversion +12%, time to publish −40%",
  },
};

export default function Project() {
  const { id } = useParams();
  const proj = id ? PROJECTS[id] : undefined;

  if (!proj) {
    return (
      <div className="container py-20">
        <p className="text-foreground/70">Project not found.</p>
        <Link to="/" className="text-accent">Back home</Link>
      </div>
    );
  }

  return (
    <section className="container py-10 md:py-16">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{proj.title}</h1>
      </header>
      <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow">
        <img src={proj.image} alt={proj.title} className="w-full h-auto" />
      </figure>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p className="text-foreground/80">{proj.description}</p>
          <p className="text-foreground/80"><span className="font-semibold">Outcomes:</span> {proj.outcomes}</p>
        </div>
        <aside className="rounded-2xl border border-border p-6 bg-card/60 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Role</p>
            <p className="mt-1 text-sm">{proj.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {proj.tools.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-8 text-sm text-foreground/60">
        <Link to="/" className="hover:text-foreground">← Back home</Link>
      </div>
    </section>
  );
}

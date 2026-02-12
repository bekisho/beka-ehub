import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects: {
  id: string;
  title: string;
  tools: string[];
  description: string;
  colorFrom: string;
  colorTo: string;
  imageSrc?: string;
}[] = [
  {
    id: "pro1",
    title: "Healthcare Appointment App – UI/UX Design",
    tools: ["Figma", "User Testing"],
    description:
      "A simple and friendly mobile app that helps people find doctors and book appointments without stress. I focused on clear layouts, smooth flows, and a calm design so users feel comfortable from sign-up to booking. Clean UI, easy navigation, and trust-first experience.",
    colorFrom: "from-[#FBFCF8]",
    colorTo: "to-[#374957]",
    imageSrc: "ast/beka.do.jpg",
  },
  {
    id: "pro2",
    title: "Digital Wallet & Finance App – UI/UX Design",
    tools: ["Figma"],
    description:
      "A modern dark-mode finance app designed to help users manage money easily and securely. Focused on smooth onboarding, clear transactions, and simple insights, the design makes everyday payments and tracking feel effortless and intuitive. Clean UI, easy navigation, and trust-first experience.",
    colorFrom: "from-[#110F1B]",
    colorTo: "to-[#1F2F3C]",
    imageSrc: "ast/beka.bl.jpg",
  },
  {
    id: "pro3",
    title: "Book Library & Recommendation App",
    tools: ["Figma", "Usability Testing"],
    description:
      "Developed a user-centered library app UI enabling users to discover, search, and save books according to interests. Focused on accessibility and interactivity with vibrant visuals and personalized recommendation categories such as For You and Recommends.",
    colorFrom: "from-[#171529]",
    colorTo: "to-[#151031]",
    imageSrc: "ast/book.png",
  },
  {
    id: "pro4",
    title: "Mill Online Shop (Mobile E-commerce App)",
    tools: ["Figma", "Tokens", "Documentation"],
    description:
      "A personalized mobile commerce app with smart search, clean product grid, and bottom navigation. Designed for ease of browsing and fast purchases on the go.",
    colorFrom: "from-[#0F172A]",
    colorTo: "to-[#34d399]",
    imageSrc: "ast/beka.mi.jpg",
  },
  {
    id: "pro5",
    title: "Multi-Industry Web UI Collection – UI/UX Design",
    tools: ["Figma", "Prototyping"],
    description:
      "A set of modern web interfaces designed across different industries, including dashboards, tech startups, skincare e-commerce, and real estate. Each layout focuses on clear structure, strong visuals, and smooth user experience while keeping the design clean, human, and easy to navigate.",
    colorFrom: "from-[#111827]",
    colorTo: "to-[#f59e0b]",
    imageSrc: "ast/land.png",
  },

  {
    id: "pro6",
    title: "VisionCraft (Creative Agency Website)",
    tools: ["Figma"],
    description:
      "A modern portfolio site for a video editing business. It features services, client works, and collaborations with a comprehensible layout and engaging visuals.",
    colorFrom: "from-[#0F172A]",
    colorTo: "to-[#ef4444]",
    imageSrc: "ast/beka.pro 5.jpg",
  },
];
export function Work() {
  return (
    <section id="work" className="container py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
          <p className="mt-2 text-foreground/70 max-w-2xl">A selection of projects spanning product design, design systems, and conversion‑focused UX.</p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <CaseStudy key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ id, title, tools, description, colorFrom, colorTo, imageSrc }: {
  id: string;
  title: string;
  tools: string[];
  description: string;
  colorFrom: string;
  colorTo: string;
  imageSrc?: string;
}) {
  return (
    <Link to={`/projects/${id}`} className="group overflow-hidden rounded-2xl border border-border text-left bg-card/60 focus:outline-none focus:ring-2 focus:ring-ring">
      <div className={cn("p-3", "bg-gradient-to-br", colorFrom, colorTo)}>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(200px_120px_at_20%_20%,rgba(255,255,255,0.8),transparent),radial-gradient(300px_160px_at_80%_20%,rgba(255,255,255,0.35),transparent)]" />
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-2 text-foreground/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center text-sm text-accent">
          View Case Study <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

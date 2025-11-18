import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skills = [
  "UI Design (Figma, Adobe XD)",
  "UX Research & Wireframing",
  "Prototyping & User Testing",
  "Framer & Responsive Design",
];

export function About() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-center">
        <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-2xl overflow-hidden shadow-xl border border-border">
          <img src="ast/beka.pro.jpg" alt="Beka portrait" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-foreground/80 max-w-2xl">
            I 
am a committed IT professional with a focus on Hardware and
 Networking Services (HNS) while expanding my knowledge in UI/UX design
 and web development. As someone who enjoys learning, I appreciate the
 progress of positive results and bring significant problem-solving abilities
 when engaged in IT development that yields positive business outcomes. I
 have experience in utilizing Figma and Framer for design and using
 Python/Django for backend development, and I want to refine a unified
 understanding of design that can be done without compromising
 technology reliability and user-measurable outcome at a multisci level.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="px-3 py-1.5 rounded-full">{s}</Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href="/file:///C:/Users/aa/Downloads/CV.UI.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#process">My Design Process</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

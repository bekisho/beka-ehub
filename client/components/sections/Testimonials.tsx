const testimonials = [
  {
    quote:
      "Easy to use, clean, and very calming. Booking a doctor feels simple and stress-free..",
    name: "Product Manager",
    role: "HealthTech Startup",
  },
  {
    quote:
      "Looks professional and modern. Everything is clear and easy to understand. Great job!",
    name: "Founder",
    role: "Digital Wallet App",
  },
  {
    quote:
      "“Feels friendly and smart. Chatting with the AI is smooth and natural.",
    name: "CTO",
    role: "AI Platform",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kind Words</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="rounded-2xl border border-border p-6 bg-card/60">
            <p className="text-foreground/80">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-foreground/60">— {t.name}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

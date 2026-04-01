import { Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const activities = [
  "Event Organizer, Dept. of CSE - MITS (2024–25)",
  "Coordinator, MITS Web Club (2025–26)",
  "Organized InnoSpark 1.0 National Level Hackathon with CSI",
  "Participant in Singularity University India Summit 2025 (Bangalore)",
];

const ExtraCurricularSection = () => (
  <section id="extra" className="py-24 px-4 max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-12 text-center">Extra Curricular</h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-2 gap-6">
      {activities.map((a, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="glow-border rounded-lg p-5 bg-card/60 card-hover flex items-start gap-4">
            <Users className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground text-sm">{a}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ExtraCurricularSection;

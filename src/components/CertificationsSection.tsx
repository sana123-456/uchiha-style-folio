import { Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certs = [
  "Programming with Python — Internshala",
  "JavaScript — GeeksforGeeks",
  "Web Development — Cognifyz Technologies",
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-4 max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-12 text-center">Certifications</h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-6">
      {certs.map((c, i) => (
        <ScrollReveal key={i} delay={i * 0.15}>
          <div className="glow-border rounded-lg p-6 bg-card/60 card-hover group">
            <Award className="w-8 h-8 text-primary mb-3 group-hover:animate-pulse-glow" />
            <p className="text-foreground text-sm">{c}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default CertificationsSection;

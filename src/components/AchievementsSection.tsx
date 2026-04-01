import { Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  "3rd position in IEEE Ideathon 2025 (MITS)",
  "2nd position in Error Replica Competition – GMOCS (MITS)",
  "2nd position in Technical Quiz – DEFESTA (MITS)",
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 px-4 max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-12 text-center">Achievements</h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((a, i) => (
        <ScrollReveal key={i} delay={i * 0.15}>
          <div className="glow-border rounded-lg p-6 bg-card/60 card-hover text-center">
            <Trophy className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse-glow" />
            <p className="text-foreground text-sm">{a}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default AchievementsSection;

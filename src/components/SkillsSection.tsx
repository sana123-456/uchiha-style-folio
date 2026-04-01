import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "C", level: 80 },
  { name: "Java", level: 70 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "SQL / MySQL", level: 70 },
  { name: "Python", level: 65 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-12 text-center">Skills</h2>
    </ScrollReveal>

    <div className="space-y-6">
      {skills.map((skill, i) => (
        <ScrollReveal key={skill.name} delay={i * 0.1}>
          <div className="flex items-center gap-4">
            <span className="w-28 text-sm font-display tracking-wider text-foreground">{skill.name}</span>
            <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-crimson"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                style={{ boxShadow: "0 0 10px hsl(0 100% 50% / 0.5)" }}
              />
            </div>
            <span className="text-muted-foreground text-sm w-10 text-right">{skill.level}%</span>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal delay={0.3}>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Adaptability", "Quick Learning", "Leadership", "Coordination"].map((s) => (
          <div key={s} className="glow-border rounded-lg p-4 text-center bg-card/50 card-hover">
            <span className="text-sm font-display tracking-wider text-foreground">{s}</span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export default SkillsSection;

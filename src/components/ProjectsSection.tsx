import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Freelancing Website for Students",
    role: "Frontend Developer",
    duration: "1 Month",
    team: "3",
    tech: "HTML, CSS",
    desc: "Built responsive frontend UI/UX for student freelancing platform focusing on accessibility and user experience.",
  },
  {
    title: "Webclub ID Generator",
    role: "Solo Developer",
    duration: "20 Days",
    team: "1",
    tech: "Python",
    desc: "Built Python web app to generate standardized ID cards for MITS Web Club members.",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title text-primary mb-12 text-center">Projects</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="glow-border rounded-lg p-6 bg-card/60 card-hover h-full flex flex-col">
              <h3 className="text-foreground font-display font-bold text-lg tracking-wide mb-2">{p.title}</h3>
              <p className="text-primary text-sm font-display">{p.role}</p>
              <p className="text-muted-foreground text-sm mt-3 flex-1">{p.desc}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {p.tech.split(", ").map((t) => (
                  <span key={t} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{t}</span>
                ))}
              </div>
              <Button variant="heroOutline" size="sm" className="mt-4 self-start" onClick={() => setSelected(i)}>
                View Details
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glow-border rounded-lg p-8 bg-card max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-primary font-display font-bold text-xl mb-2">{projects[selected].title}</h3>
              <p className="text-muted-foreground mb-4">{projects[selected].desc}</p>
              <div className="space-y-2 text-sm">
                <p><span className="text-primary">Duration:</span> <span className="text-foreground">{projects[selected].duration}</span></p>
                <p><span className="text-primary">Team Size:</span> <span className="text-foreground">{projects[selected].team}</span></p>
                <p><span className="text-primary">Tech:</span> <span className="text-foreground">{projects[selected].tech}</span></p>
              </div>
              <Button variant="hero" size="sm" className="mt-6" onClick={() => setSelected(null)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

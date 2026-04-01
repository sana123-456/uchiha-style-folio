import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-12 text-center">About Me</h2>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <p className="text-foreground/80 text-lg leading-relaxed mb-10">
        Computer Science Engineering (CSE - Core) graduate with a strong foundation in programming and problem-solving. 
        Currently enhancing skills in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">DSA</span>, and <span className="text-primary font-semibold">Full Stack Development</span>. 
        Completed C programming and gaining hands-on practice through coding and projects. Quick learner with analytical skills, seeking entry-level opportunity.
      </p>
    </ScrollReveal>

    <ScrollReveal delay={0.4}>
      <div className="glow-border rounded-lg p-6 bg-card/50 backdrop-blur italic text-center">
        <p className="text-primary/90 text-xl font-display tracking-wide">"True strength is born from struggle."</p>
        <p className="text-muted-foreground mt-2 text-sm">— Itachi Uchiha</p>
      </div>
    </ScrollReveal>
  </section>
);

export default AboutSection;

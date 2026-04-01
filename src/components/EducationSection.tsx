import ScrollReveal from "./ScrollReveal";

const education = [
  {
    title: "B.Tech in CSE",
    institution: "Madanapalle Institute of Technology & Science (MITS)",
    year: "2024–2028",
    score: "CGPA: 9.37",
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    year: "2022–2024",
    score: "96.3%",
  },
  {
    title: "Matriculation (State)",
    institution: "ZP High School, Nallamada",
    year: "2021–2022",
    score: "96%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-4 max-w-3xl mx-auto">
    <ScrollReveal>
      <h2 className="section-title text-primary mb-16 text-center">Education</h2>
    </ScrollReveal>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-crimson to-transparent" />

      {education.map((edu, i) => (
        <ScrollReveal key={i} delay={i * 0.2}>
          <div className={`relative flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-12`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-red transform -translate-x-1/2 mt-2 animate-pulse-glow" />

            <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glow-border rounded-lg p-5 bg-card/60 card-hover">
                <span className="text-primary text-xs font-display tracking-widest">{edu.year}</span>
                <h3 className="text-foreground font-bold text-lg mt-1">{edu.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                <p className="text-primary/80 font-display text-sm mt-2">{edu.score}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default EducationSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Sharingan from "./Sharingan";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden smoke-bg">
    {/* Floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        initial={{
          x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        }}
        animate={{
          y: [null, -100, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      />
    ))}

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex justify-center"
      >
        <Sharingan size={80} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-widest glow-text text-primary mb-4"
      >
        SHAIK SANA FARHEEN
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg md:text-xl font-display tracking-wider mb-10"
      >
        CSE Core &nbsp;|&nbsp; Java &nbsp;|&nbsp; Full Stack Learner &nbsp;|&nbsp; DSA Enthusiast
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <Button variant="hero" size="lg">Download Resume</Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;

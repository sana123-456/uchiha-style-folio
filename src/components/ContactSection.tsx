import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🔥");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title text-primary mb-12 text-center">Contact</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground">6305734069</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:24691A05EO@mits.ac.in" className="text-foreground hover:text-primary transition-colors">24691A05EO@mits.ac.in</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">18/34, P. Agraharam, Badvel, Kadapa – 516227</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/VailetiDineshKumar" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
            <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;

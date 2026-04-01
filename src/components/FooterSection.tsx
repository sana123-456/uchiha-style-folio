import Sharingan from "./Sharingan";

const FooterSection = () => (
  <footer className="border-t border-border/50 py-8 px-4 text-center">
    <div className="flex justify-center mb-4">
      <Sharingan size={30} />
    </div>
    <p className="text-muted-foreground text-sm">
      Made with 🔥 by <span className="text-primary font-display">Shaik Sana Farheen</span>
    </p>
  </footer>
);

export default FooterSection;

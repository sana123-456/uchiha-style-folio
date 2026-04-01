import { useEffect, useState } from "react";
import Sharingan from "./Sharingan";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 glow-red rounded-full p-2 bg-card/80 backdrop-blur hover:scale-110 transition-transform"
      aria-label="Back to top"
    >
      <Sharingan size={36} />
    </button>
  );
};

export default BackToTop;

const Sharingan = ({ size = 60 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="animate-sharingan">
    <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(0 100% 50%)" strokeWidth="3" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(0 100% 40%)" strokeWidth="2" />
    <circle cx="50" cy="50" r="10" fill="hsl(0 0% 5%)" stroke="hsl(0 100% 50%)" strokeWidth="2" />
    {[0, 120, 240].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 50 + 30 * Math.cos(rad);
      const y = 50 + 30 * Math.sin(rad);
      return <circle key={angle} cx={x} cy={y} r="5" fill="hsl(0 100% 50%)" />;
    })}
  </svg>
);

export default Sharingan;

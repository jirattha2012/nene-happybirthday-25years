import { useMemo } from "react";

const COLORS = ["#E8628C", "#FFC857", "#6F9C77", "#7C9CE8", "#FFFFFF"];

/**
 * A one-shot confetti burst. Mount this component when you want confetti,
 * unmount it (or let the parent stop rendering it) when the burst is over.
 */
export default function Confetti({ pieceCount = 60 }) {
  const pieces = useMemo(() => {
    return Array.from({ length: pieceCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 2.2 + Math.random() * 1.4,
      rotate: Math.random() * 360,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
      drift: (Math.random() - 0.5) * 120,
    }));
  }, [pieceCount]);

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            "--drift": `${p.drift}px`,
            "--rot": `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}

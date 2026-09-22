import { useState } from "react";

export default function Cake({ onBlow }) {
  const [lit, setLit] = useState(true);

  function handleBlow() {
    if (!lit) return;
    setLit(false);
    onBlow?.();
  }

  return (
    <section id="cake" className="cake-section">
      <h2 className="section-title">ขอพรวันเกิด</h2>
      <p className="section-lead">
        กดที่เทียนเพื่อเป่าให้เนเน่ แล้วขอพรในใจได้เลย
      </p>

      <button
        className="cake-button"
        onClick={handleBlow}
        aria-pressed={!lit}
        aria-label={lit ? "เป่าเทียน" : "เป่าเทียนแล้ว"}
      >
        <svg viewBox="0 0 240 200" width="220" height="184">
          {/* plate */}
          <ellipse cx="120" cy="176" rx="100" ry="10" fill="#F1D9D2" />
          {/* cake base */}
          <rect x="40" y="120" width="160" height="52" rx="10" fill="#F7C6D6" />
          <rect x="40" y="120" width="160" height="14" rx="7" fill="#FFFFFF" opacity="0.6" />
          {/* middle layer */}
          <rect x="55" y="86" width="130" height="42" rx="9" fill="#FBE0A8" />
          <rect x="55" y="86" width="130" height="12" rx="6" fill="#FFFFFF" opacity="0.55" />
          {/* top layer */}
          <rect x="75" y="58" width="90" height="34" rx="8" fill="#C9E3CE" />

          {/* candles: 2 and 5 */}
          <g transform="translate(96,20)">
            <rect x="0" y="18" width="6" height="24" fill="#7C9CE8" />
            <path
              d={lit ? "M3 18 C -3 10, 3 4, 3 -2 C 3 4, 9 10, 3 18 Z" : ""}
              className="flame"
              fill="#FFC857"
            />
          </g>
          <g transform="translate(140,20)">
            <rect x="0" y="18" width="6" height="24" fill="#E8628C" />
            <path
              d={lit ? "M3 18 C -3 10, 3 4, 3 -2 C 3 4, 9 10, 3 18 Z" : ""}
              className="flame"
              fill="#FFC857"
              style={{ animationDelay: "0.3s" }}
            />
          </g>

          {/* sprinkles */}
          <circle cx="70" cy="105" r="3" fill="#E8628C" />
          <circle cx="150" cy="140" r="3" fill="#7C9CE8" />
          <circle cx="120" cy="150" r="3" fill="#6F9C77" />
        </svg>
      </button>

      <p className="cake-caption">
        {lit ? "แตะเทียนเพื่อเป่า 🕯️" : "สุขสันต์วันเกิด เนเน่! ขอให้ทุกพรที่ขอเป็นจริง 🎉"}
      </p>
    </section>
  );
}

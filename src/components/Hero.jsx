function Balloon({ color, style, string = true }) {
  return (
    <div className="balloon" style={style}>
      <svg viewBox="0 0 60 76" width="52" height="66">
        <ellipse cx="30" cy="30" rx="28" ry="30" fill={color} />
        <ellipse cx="20" cy="18" rx="7" ry="9" fill="rgba(255,255,255,0.35)" />
        <path d="M30 60 L26 66 L34 66 Z" fill={color} />
        {string && (
          <path
            d="M30 66 C 26 72, 34 74, 30 80"
            stroke="rgba(59,36,56,0.35)"
            strokeWidth="1.5"
            fill="none"
          />
        )}
      </svg>
    </div>
  );
}

function Flower({ color = "#E8628C", style }) {
  return (
    <div className="balloon" style={style}>
      <svg viewBox="0 0 60 60" width="40" height="40">
        <g fill={color}>
          <circle cx="30" cy="14" r="10" />
          <circle cx="46" cy="30" r="10" />
          <circle cx="30" cy="46" r="10" />
          <circle cx="14" cy="30" r="10" />
        </g>
        <circle cx="30" cy="30" r="9" fill="#FFC857" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-balloons" aria-hidden="true">
        <Balloon color="#E8628C" style={{ left: "6%", top: "18%", animationDelay: "0s" }} />
        <Balloon color="#FFC857" style={{ left: "78%", top: "8%", animationDelay: "0.6s" }} />
        <Balloon color="#7C9CE8" style={{ left: "85%", top: "48%", animationDelay: "1.1s" }} />
        <Balloon color="#6F9C77" style={{ left: "2%", top: "55%", animationDelay: "0.3s" }} />

        <Flower color="#E8628C" style={{ left: "18%", top: "75%", animationDelay: "0.4s" }} />
        <Flower color="#FFC857" style={{ left: "62%", top: "72%", animationDelay: "0.9s" }} />
        <Flower color="#7C9CE8" style={{ left: "40%", top: "10%", animationDelay: "1.3s" }} />
      </div>

      <p className="hero-eyebrow">แด่คนที่ชื่อ</p>
      <h1 className="hero-title">
        เนเน่
        <span className="hero-age">25</span>
      </h1>
      <p className="hero-sub">สุขสันต์วันเกิดนะ ขอให้ปีนี้เป็นปีที่ดีกับเธอมากๆ</p>

      <a className="hero-scroll" href="#cake">
        เป่าเค้กก่อนเลย ↓
      </a>
    </section>
  );
}

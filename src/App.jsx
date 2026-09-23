import { useState } from "react";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import Cake from "./components/Cake.jsx";
import WishCards from "./components/WishCards.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Confetti from "./components/Confetti.jsx";
import { FaInstagram } from "react-icons/fa";

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  function handleBlow() {
    setShowConfetti(true);
    window.setTimeout(() => setShowConfetti(false), 3200);
  }

  return (
    <div className="page">
      {showConfetti && <Confetti />}
      <Hero />
      <Countdown />
      <Cake onBlow={handleBlow} />
      <WishCards />
      <Gallery />
      <Footer />

      {/* signatures */}
      <div className="signature">
        <span className="sig-ig">
          <FaInstagram className="ig-logo" />
          <span className="rainbow-text">IG: wiruya_k</span>
        </span>
        <span className="sig-quote">Dear Nene at 25 Year old ( ｡ •̀ ᴖ •́ ｡)</span>
      </div>

    </div>
  );
}

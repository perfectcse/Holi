import { useState } from "react";
import confetti from "canvas-confetti";

const Wishes = () => {
  const [style, setStyle] = useState("traditional");

  const messages = {
    traditional:
      "May this Holi bring colors of happiness, prosperity and success into your life.",
    fun:
      "Less stress, more colors! More hustle, less drama! Happy Holi 🔥",
    professional:
      "Wishing you and your family a vibrant and prosperous Holi."
  };

  const handleWishClick = (type) => {
    setStyle(type);

    // Confetti 🎉
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });
  };

  return (
    <div className="wishes">
      <div className="buttons">
        <button onClick={() => handleWishClick("traditional")}>
          Traditional
        </button>
        <button onClick={() => handleWishClick("fun")}>
          Fun
        </button>
        <button onClick={() => handleWishClick("professional")}>
          Professional
        </button>
      </div>

      <p className="message">{messages[style]}</p>
    </div>
  );
};

export default Wishes;
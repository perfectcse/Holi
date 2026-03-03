import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Hero from "./components/Hero";
import Wishes from "./components/Wishes";
import Playlist from "./components/Playlist";
import "./App.css";

function App() {
  const [showPlaylist, setShowPlaylist] = useState(false);

  // Dynamic Tab Title
  useEffect(() => {
    document.title = "🌈 Happy Holi Vishal";
  }, []);

  const handlePlaylist = () => {
    setShowPlaylist(!showPlaylist);

    // Confetti blast 🎉
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="app">
      <Hero />
      <Wishes />

      <button className="playlist-btn" onClick={handlePlaylist}>
        {showPlaylist ? "Hide Songs 🎵" : "Play Holi Songs 🎶"}
      </button>

      <div className={`playlist-wrapper ${showPlaylist ? "show" : ""}`}>
        {showPlaylist && <Playlist />}
      </div>
    </div>
  );
}

export default App;
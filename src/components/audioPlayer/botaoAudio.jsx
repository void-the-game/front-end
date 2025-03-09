import React, { useState, useEffect } from "react";
import { FaVolumeDown, FaVolumeMute } from "react-icons/fa";
import "./audio.scss";

const BotaoAudio = () => {
  const [isMuted, setIsMuted] = useState(true); // Alterei o estado para "isMuted"
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = new Audio("/audio/audio3.mp3");
    audioElement.loop = true;

    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        setIsMuted(true);
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audio) return;
    if (isMuted) {
      audio.muted = false; // Desmutar
      setIsMuted(false);
      audio.play(); // Reproduzir o áudio caso esteja tocando
    } else {
      audio.muted = true; // Mudar para mudo
      setIsMuted(true);
      audio.pause(); // Pausar o áudio
    }
  };

  return (
    <div>
      <button
        onClick={toggleAudio}
        className="sound"
        aria-label={isMuted ? "Desativar mudo" : "Ativar mudo"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeDown />}
      </button>
    </div>
  );
};

export default BotaoAudio;

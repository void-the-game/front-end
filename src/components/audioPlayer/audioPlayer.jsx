// src/components/audioPlayer/audioPlayer.jsx
import React, { useEffect, useState } from 'react';

const AudioPlayer = () => {
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio/audio3.mp3');
    audio.loop = true;

    // A função de play precisa ser chamada dentro de uma interação
    const tryPlayAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Áudio tocando');
            setIsAudioReady(true); // Se o áudio começou a tocar, atualize o estado
          })
          .catch((error) => {
            console.error('Erro ao tentar tocar o áudio:', error);
            // Se o autoplay falhar, a interação é necessária
            setIsAudioReady(false);
          });
      }
    };

    // Tente tocar o áudio imediatamente
    tryPlayAudio();

    // Adicionar um listener de clique no documento para desbloquear a reprodução
    const onUserInteraction = () => {
      tryPlayAudio();
      document.removeEventListener('click', onUserInteraction); // Remover o listener após o primeiro clique
    };

    // Adicionar um ouvinte de evento para o clique inicial
    document.addEventListener('click', onUserInteraction);

    // Limpeza do efeito ao desmontar o componente
    return () => {
      audio.pause();
      document.removeEventListener('click', onUserInteraction);
    };
  }, []);

  return <></>; // Não há necessidade de renderizar nada
};

export default AudioPlayer;

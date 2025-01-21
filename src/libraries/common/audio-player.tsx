'use client';
import { getRandomNumber } from '@/utils/common';
import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { RenderIcon } from '../icons';

type AudioPlayerProps = {
  className?: string;
};

export function AudioPlayer({ className }: AudioPlayerProps) {
  const [audio, setAudio] = useState(getRandomNumber(7));
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio play failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const playRandomAudio = () => {
    setAudio(getRandomNumber(7));
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error('Audio play failed:', error);
        });
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      if (hasInteracted) return; // Avoid re-triggering
      setHasInteracted(true);

      // Play audio immediately after interaction
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Audio play failed on interaction:', error);
          });
      }
    };

    window.addEventListener('pointerdown', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleUserInteraction);
    };
  }, [hasInteracted]);

  return (
    <div className={clsx(className, 'fixed z-50 bottom-5 right-10')}>
      <div className="flex items-center flex-col gap-2">
        {/* Player */}
        <span className="relative">
          <button
            type="button"
            onClick={togglePlayPause}
            className="flex z-[2] justify-center items-center rounded-full text-white w-10 h-10 bg-secondary relative"
          >
            <RenderIcon name={isPlaying ? 'volume' : 'volume-mute'} className="!w-4 !h-4" />
          </button>
          <span className="animate-ping z-[1] absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-secondary rounded-full"></span>
        </span>

        {/* Random */}
        <button
          onClick={playRandomAudio}
          type="button"
          className="flex z-[2] justify-center items-center rounded-full text-white w-10 h-10 bg-secondary relative"
        >
          <RenderIcon name="random" className="!w-4 !h-4" />
        </button>
      </div>

      <audio ref={audioRef} controls loop hidden>
        <source src={`/audio/${audio}.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

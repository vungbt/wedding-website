'use client';
import { getRandomNumber } from '@/utils/common';
import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { RenderIcon } from '../icons';

type AudioPlayerProps = {
  className?: string;
};

export function AudioPlayer({ className }: AudioPlayerProps) {
  const [audio, setAudio] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playRandomAudio = () => {
    setAudio(getRandomNumber(5));
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

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
        <source src={`/audio/${audio ?? getRandomNumber(5)}.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

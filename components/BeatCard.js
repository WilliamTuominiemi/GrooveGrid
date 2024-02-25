'use client';

import { useState } from 'react';

import { play, stop } from '@/utils/buttonUtils';

const beatCard = ({ notes, mix, instruments, creator }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => {
    setIsPlaying(true);
    play(notes, mix, instruments);
    setTimeout(() => setIsPlaying(false), 8000);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    stop();
  };

  return (
    <div className="bg-DarkSoftSkyBlue m-2 p-2 rounded flex flex-col items-center">
      <p className={`m-2 text-6xl ${isPlaying ? 'spin' : ''}`}>💿</p>
      <div className="grid gap-2 grid-cols-2 m-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          onClick={() => startPlaying()}
        >
          ▶️
        </button>
        <button
          className="bg-white hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          onClick={() => stopPlaying()}
        >
          ⏹️
        </button>
      </div>

      <p className="text-xs	font-thin tracking-tight text-center overline">Produced by {creator.name}</p>
    </div>
  );
};

export default beatCard;

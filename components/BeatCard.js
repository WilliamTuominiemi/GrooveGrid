'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { play, stop } from '@/utils/buttonUtils';

const beatCard = ({ notes, mix, instruments, creator }) => {
  const profileLink = `/profile/${creator.id}`;

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
    <div className="bg-gradient-to-l from-DarkSoftSkyBlue to-softSkyBlue m-2 p-2 rounded flex flex-col items-center">
      <p className={`m-2 text-6xl ${isPlaying ? 'spin' : ''}`}>💿</p>
      <div className="grid gap-2 grid-cols-2 m-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={() => startPlaying()}
        >
          <Image src="/icons/play.svg" alt="Play Icon" width={10} height={10} />
        </button>

        <button
          className="bg-white hover:bg-gray-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={() => stopPlaying()}
        >
          <Image src="/icons/stop.svg" alt="Stop Icon" width={10} height={10} />
        </button>
      </div>

      <p className="text-xs	font-thin tracking-tight text-center">
        Produced by <Link href={profileLink}>{creator.name}</Link>
      </p>
    </div>
  );
};

export default beatCard;

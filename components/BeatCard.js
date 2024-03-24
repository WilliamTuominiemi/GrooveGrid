'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { play, stop } from '@/utils/buttonUtils';

const beatCard = ({ notes, mix, instruments, creator, title, color1, color2 }) => {
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

  const gradientStyle = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
  };

  return (
    <div className="m-2 p-2 rounded flex flex-col items-center" style={gradientStyle}>
      <p className={`m-2 text-6xl ${isPlaying ? 'spin' : ''}`}>💿</p>
      <p className="text-3xl	 tracking-tight text-center">{title}</p>
      <p className="text-xs	font-thin tracking-tight text-center">
        <Link href={profileLink}>{creator.name}</Link>
      </p>
      <div className="grid gap-2 grid-cols-2 m-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-black"
          onClick={() => startPlaying()}
        >
          <Image src="/icons/play.svg" alt="Play Icon" width={10} height={10} />
        </button>

        <button
          className="bg-white hover:bg-gray-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-black"
          onClick={() => stopPlaying()}
        >
          <Image src="/icons/stop.svg" alt="Stop Icon" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default beatCard;

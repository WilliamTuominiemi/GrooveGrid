'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { play, stop } from '@/utils/buttonUtils';

const beatCard = ({ id, notes, mix, instruments, creator, title, color1, color2, plays }) => {
  const profileLink = `/profile/${creator.id}`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [_plays, setPlays] = useState(plays);

  const startPlaying = () => {
    setIsPlaying(true);
    play(notes, mix, instruments);
    setTimeout(() => setIsPlaying(false), 8000);
    addPlay();
  };

  const addPlay = async () => {
    const response = await fetch(`/api/beat/play`, {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
    });
    const data = await response.json();
    setPlays(data.plays);
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
      <p className="text-xs	font-light tracking-tight text-center hover:font-medium">
        <Link href={profileLink}>{creator.name}</Link>
      </p>
      <div className="grid gap-2 grid-cols-2 m-2">
        <button
          className={`bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-black ${
            isPlaying ? 'disabled opacity-75' : ''
          }`}
          onClick={() => startPlaying()}
          disabled={isPlaying}
        >
          <Image src="/icons/play.svg" alt="Play Icon" width={10} height={10} />
        </button>

        <button
          className={`bg-white hover:bg-gray-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border-2 border-black ${
            !isPlaying ? 'disabled opacity-75' : ''
          }`}
          onClick={() => stopPlaying()}
          disabled={!isPlaying}
        >
          <Image src="/icons/stop.svg" alt="Stop Icon" width={10} height={10} />
        </button>
      </div>
      <p className="text-xs	font-thin tracking-tight">
        Played <a class=" font-medium">{_plays}</a> times
      </p>
    </div>
  );
};

export default beatCard;

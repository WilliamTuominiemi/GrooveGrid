'use client';

import Image from 'next/image';

import { play, stop } from '@/utils/buttonUtils';

const Controls = ({ notes, mix, instrumentBoard }) => {
  return (
    <div className="grid grid-cols-1 place-content-evenly gap-y-5 bg-softSkyBlue p-4 m-1">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={() => play(notes, mix, instrumentBoard)}
      >
        <Image src="/icons/play.svg" alt="Play Icon" width={10} height={10} />
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={stop}
      >
        <Image src="/icons/stop.svg" alt="Stop Icon" width={10} height={10} />
      </button>
    </div>
  );
};

export default Controls;

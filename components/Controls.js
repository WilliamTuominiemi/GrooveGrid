'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { play, stop } from '@/utils/buttonUtils';

const Controls = ({ notes, mix, instrumentBoard }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);

  const share = async () => {
    setSubmitting(true);

    try {
      const response = await fetch('/api/beat/new', {
        method: 'POST',
        body: JSON.stringify({
          notes,
          mix,
          instrumentBoard,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

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
      <button
        className="bg-white hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={share}
      >
        <Image src="/icons/share.svg" alt="Share Icon" width={10} height={10} />
      </button>
    </div>
  );
};

export default Controls;

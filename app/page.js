'use client';

import { useState } from 'react';

import Canvas from '@/components/Canvas';
import Instruments from '@/components/Instruments';
import Controls from '@/components/Controls';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-powderBlue">
      <div className="flex">
        <Instruments />
        <Canvas onUpdateNotes={updateNotes} />
        <Controls notes={notes} />
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';

import Canvas from '@/components/Canvas';
import Instruments from '@/components/Instruments';
import Controls from '@/components/Controls';
import Mixer from '@/components/Mixer';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [activeMix, setActiveMix] = useState(0);
  const [mix, setMix] = useState([
    [50, 50],
    [50, 50],
    [50, 50],
    [50, 50],
    [50, 50],
  ]);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
  };

  const updatePitch = (newPitch) => {
    const newMix = [...mix];
    newMix[activeMix][0] = newPitch;
    setMix(newMix);
  };

  const updateVolume = (newVolume) => {
    const newMix = [...mix];
    newMix[activeMix][1] = newVolume;
    setMix(newMix);
  };

  const onUpdateActiveMix = (newActive) => {
    setActiveMix(newActive);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-powderBlue">
      <div className="flex flex-col">
        <div className="flex">
          <Instruments onUpdateActiveMix={onUpdateActiveMix} />
          <Canvas onUpdateNotes={updateNotes} />
          <Controls notes={notes} mix={mix} />
        </div>
        <Mixer onUpdatePitch={updatePitch} onUpdateVolume={updateVolume} active={activeMix} mix={mix} />
      </div>
    </main>
  );
}

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
  const [instrumentBoard, setInstrumentBoard] = useState([0, 1, 2, 3, 4]);

  const instruments = ['🎹', '🥁', '🎷', '🎸', '🎻', '📯', '🪕', '📢', '🔔', '💥', '💵', '👏', '🎺', '🎤'];

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

  const updateActiveMix = (newActive) => {
    setActiveMix(newActive);
  };

  const updateInstrumentBoard = (newBoard) => {
    const newInstrumentBoard = [...instrumentBoard];
    newInstrumentBoard[newBoard.instrumentIndexToChange] = newBoard.newInstrument;
    setInstrumentBoard(newInstrumentBoard);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-powderBlue">
      <div className="flex flex-col">
        <div className="flex">
          <Instruments
            onUpdateActiveMix={updateActiveMix}
            instrumentBoard={instrumentBoard}
            instruments={instruments}
          />
          <Canvas onUpdateNotes={updateNotes} notes={notes} />
          <Controls notes={notes} mix={mix} instrumentBoard={instrumentBoard} />
        </div>
        <Mixer
          onUpdatePitch={updatePitch}
          onUpdateVolume={updateVolume}
          active={activeMix}
          mix={mix}
          onUpdateInstrumentBoard={updateInstrumentBoard}
          instrumentBoard={instrumentBoard}
          instruments={instruments}
        />
      </div>
    </main>
  );
}

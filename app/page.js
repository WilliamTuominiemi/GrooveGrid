'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Canvas from '@/components/Canvas';
import Instruments from '@/components/Instruments';
import Controls from '@/components/Controls';
import Mixer from '@/components/Mixer';

export default function Home() {
  const { data: session, status } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [title, setTitle] = useState('');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [color1, setColor1] = useState(() => generateRandomColor());
  const [color2, setColor2] = useState(() => generateRandomColor());

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleColor1Change = (event) => {
    setColor1(event.target.value);
  };

  const handleColor2Change = (event) => {
    setColor2(event.target.value);
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
  };

  const openShareMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const share = async () => {
    setSubmitting(true);

    try {
      const response = await fetch('/api/beat/new', {
        method: 'POST',
        body: JSON.stringify({
          title,
          color1,
          color2,
          notes,
          mix,
          instrumentBoard,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push('/feed');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center mt-10">
      {isMenuOpen ? (
        <div className="grid grid-cols-2 bg-softSkyBlue rounded-md">
          <div className="grid grid-cols-1 place-content-evenly gap-y-5 bg-powderBlue p-4 m-1 rounded-md justify-items-stretch">
            <label className="justify-self-center">Publish your work</label>
            <input
              className="justify-self-center bg-mutedLavenderBlue p-1 rounded-sm"
              type="text"
              id="title"
              maxLength="11"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <div className="grid grid-cols-2 justify-items-stretch">
              <input
                className="justify-self-center rounded-md bg-mutedLavenderBlue"
                type="color"
                id="color1"
                value={color1}
                onChange={handleColor1Change}
              />
              <input
                className="justify-self-center rounded-md bg-mutedLavenderBlue"
                type="color"
                id="color2"
                value={color2}
                onChange={handleColor2Change}
              />
            </div>

            <div className="grid grid-cols-2 content-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-mutedLavenderBlue hover:bg-DarkSoftSkyBlue text-white font-bold py-2 px-4 mx-1 rounded-full focus:outline-none focus:shadow-outline flex justify-center"
              >
                <Image src="/icons/back.svg" alt="Share Icon" width={15} height={15} />
              </button>
              <button
                type="submit"
                onClick={() => share()}
                className="bg-mutedLavenderBlue hover:bg-DarkSoftSkyBlue text-white font-bold py-2 px-4 mx-1 rounded-full focus:outline-none focus:shadow-outline flex justify-center"
              >
                <Image src="/icons/share.svg" alt="Share Icon" width={15} height={15} />
              </button>
            </div>
          </div>
          <div className="p-4 m-1 rounded-md flex flex-col items-center" style={gradientStyle}>
            <h1 className="text-6xl m-2">💿</h1>
            <h2 className="text-3xl m-2">{title}</h2>
            <p className="text-md m-2">{session.user.name}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex">
            <Instruments
              onUpdateActiveMix={updateActiveMix}
              instrumentBoard={instrumentBoard}
              instruments={instruments}
            />
            <Canvas onUpdateNotes={updateNotes} />
            <Controls notes={notes} mix={mix} instrumentBoard={instrumentBoard} onOpenShareMenu={openShareMenu} />
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
      )}
    </main>
  );
}

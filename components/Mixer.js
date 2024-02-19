'use client';

import React, { useState } from 'react';

const Mixer = ({ onUpdatePitch, active, mix }) => {
  const [pitch, setPitch] = useState(50);
  const [volume, setVolume] = useState(50);

  const handlePitchChange = (e) => {
    setPitch(parseInt(e.target.value, 10));
    onUpdatePitch(pitch);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value, 10));
  };

  const getInstrumentText = (index) => {
    const instruments = ['🎸', '🎻', '🥁', '🎷', '📯'];
    return `${instruments[index]}`;
  };

  return (
    <div className="flex-grow p-2 m-1 flex items-center justify-center bg-softSkyBlue">
      <p className="text-center mr-2 p-1 text-lg">{getInstrumentText(active)}</p>

      <div className="flex items-center">
        <label htmlFor="pitch" className="mr-2">
          Pitch:
        </label>
        <input
          type="range"
          id="pitch"
          name="pitch"
          min="10"
          max="99"
          value={mix[active]}
          onChange={handlePitchChange}
        />
        <span className="ml-2">{pitch}</span>
      </div>
      <div className="flex items-center ml-2">
        <label htmlFor="volume" className="mr-2">
          Volume:
        </label>
        <input type="range" id="volume" name="volume" min="10" max="99" value={volume} onChange={handleVolumeChange} />
        <span className="ml-2">{volume}</span>
      </div>
    </div>
  );
};

export default Mixer;

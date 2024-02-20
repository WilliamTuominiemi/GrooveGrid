'use client';

import React, { useState } from 'react';

import Image from 'next/image';

const Mixer = ({ onUpdatePitch, onUpdateVolume, active, mix }) => {
  const [pitch, setPitch] = useState(mix[active][0]);
  const [volume, setVolume] = useState(mix[active][1]);

  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handlePitchChange = (e) => {
    setPitch(parseInt(e.target.value, 10));
    onUpdatePitch(pitch);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value, 10));
    onUpdateVolume(volume);
  };

  const getInstrumentText = (index) => {
    const instruments = ['🎸', '🎻', '🥁', '🎷', '📯'];
    return `${instruments[index]}`;
  };

  const handleChangeInstrument = (index) => {
    console.log(active);
    console.log(index);
  };

  return (
    <div className="flex-grow p-2 m-1 flex items-center justify-center bg-softSkyBlue">
      <div className="w-8 h-8 text-center mr-5 p-1 bg-StormyDustyTurquoise rounded-lg shadow-md ">
        <button
          className="hover:bg-StormyDustyTurquoise rounded-full focus:outline-none focus:shadow-outline"
          onClick={() => setDropdownToggle(!dropdownToggle)}
        >
          {getInstrumentText(active)}
        </button>
      </div>
      {!dropdownToggle ? (
        <>
          <div className="flex items-center w-full">
            <label htmlFor="pitch" className="mr-2">
              🎚️
            </label>
            <input
              type="range"
              id="pitch"
              name="pitch"
              min="10"
              max="99"
              value={mix[active][0]}
              onChange={handlePitchChange}
            />
            <span className="ml-2 flex-shrink-0 w-8">{mix[active][0]}</span>
          </div>
          <div className="flex items-center ml-2 w-full">
            <label htmlFor="volume" className="mr-2">
              🔊
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="10"
              max="99"
              value={mix[active][1]}
              onChange={handleVolumeChange}
            />
            <span className="ml-2 flex-shrink-0 w-8">{mix[active][1]}</span>
          </div>
        </>
      ) : (
        <div className="flex w-full bg-softSkyBlue overflow-x-auto">
          <div className="overflow-x-auto">
            {['🎸', '🎻', '🥁', '🎷', '📯', '🎹', '🪕', '🎺', '🎤', '🔔', '📢', '👏'].map((instrument, index) => (
              <button
                className="hover:bg-StormyDustyTurquoise rounded-full focus:outline-none focus:shadow-outline px-2"
                key={index}
                onClick={() => handleChangeInstrument(index)}
              >
                {instrument}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mixer;

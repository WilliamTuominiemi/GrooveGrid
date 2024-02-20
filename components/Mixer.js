'use client';

import React, { useState } from 'react';

const Mixer = ({
  onUpdatePitch,
  onUpdateVolume,
  active: activeTrack,
  mix,
  onUpdateInstrumentBoard,
  instrumentBoard,
  instruments,
}) => {
  const [pitch, setPitch] = useState(mix[activeTrack][0]);
  const [volume, setVolume] = useState(mix[activeTrack][1]);

  const [dropdownToggle, setDropdownToggle] = useState(false);

  const [activeInstruments, setActiveInstruments] = useState(['🎹', '🥁', '🎷', '🎸', '🎻']);

  const handlePitchChange = (e) => {
    setPitch(parseInt(e.target.value, 10));
    onUpdatePitch(pitch);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value, 10));
    onUpdateVolume(volume);
  };

  const getInstrumentText = () => {
    return `${activeInstruments[activeTrack]}`;
  };

  const handleChangeInstrument = (index) => {
    const setting = {
      instrumentIndexToChange: activeTrack,
      newInstrument: index,
    };

    onUpdateInstrumentBoard(setting);

    const newActive = [...activeInstruments];
    newActive[activeTrack] = instruments[index];
    setActiveInstruments(newActive);
  };

  return (
    <div className="w-full p-2  flex bg-softSkyBlue max-w-content">
      <div className="w-8 h-8 text-center mr-5 p-1 bg-StormyDustyTurquoise rounded-lg shadow-md ">
        <button
          className="hover:bg-StormyDustyTurquoise rounded-full focus:outline-none focus:shadow-outline"
          onClick={() => setDropdownToggle(!dropdownToggle)}
        >
          {getInstrumentText()}
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
              value={mix[activeTrack][0]}
              onChange={handlePitchChange}
            />
            <span className="ml-2 flex-shrink-0 w-8">{mix[activeTrack][0]}</span>
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
              value={mix[activeTrack][1]}
              onChange={handleVolumeChange}
            />
            <span className="ml-2 flex-shrink-0 w-8">{mix[activeTrack][1]}</span>
          </div>
        </>
      ) : (
        <div className="flex w-full bg-softSkyBlue">
          {instruments.map((instrument, index) => (
            <button
              className="hover:bg-StormyDustyTurquoise rounded-full focus:outline-none focus:shadow-outline px-2"
              key={index}
              onClick={() => handleChangeInstrument(index)}
            >
              {instrument}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mixer;

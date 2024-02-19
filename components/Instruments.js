'use client';

const Instruments = ({ onUpdateActiveMix }) => {
  const handleClick = (index) => {
    onUpdateActiveMix(index);
  };

  return (
    <div className="grid grid-cols-1 place-content-evenly gap-y-5 bg-softSkyBlue p-4 m-1">
      {['🎸', '🎻', '🥁', '🎷', '📯'].map((instrument, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {instrument}
        </button>
      ))}
    </div>
  );
};

export default Instruments;

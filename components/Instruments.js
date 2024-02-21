'use client';

const Instruments = ({ onUpdateActiveMix, instrumentBoard, instruments }) => {
  const handleClick = (index) => {
    onUpdateActiveMix(index);
  };

  return (
    <div className="grid grid-cols-1 place-content-evenly gap-y-5 bg-softSkyBlue p-4 m-1">
      {instrumentBoard.map((instrumentIndex, index) => (
        <button
          className="bg-mutedLavenderBlue hover:bg-StormyDustyTurquoise rounded-full focus:outline-none focus:shadow-outline p-1"
          key={index}
          onClick={() => handleClick(index)}
        >
          {instruments[instrumentIndex]}
        </button>
      ))}
    </div>
  );
};

export default Instruments;

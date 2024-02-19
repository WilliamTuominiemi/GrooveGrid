const Mixer = () => {
  return (
    <div className="flex p-2 m-1 items-center justify-center bg-softSkyBlue">
      <p className="text-center mr-2">🎸:</p>
      <div className="flex items-center">
        <label htmlFor="pitch" className="mr-2">
          Pitch:
        </label>
        <input type="range" id="pitch" name="pitch" min="0" max="100" />
      </div>
      <div className="flex items-center ml-2">
        <label htmlFor="volume" className="mr-2">
          Volume:
        </label>
        <input type="range" id="volume" name="volume" min="0" max="100" />
      </div>
    </div>
  );
};

export default Mixer;

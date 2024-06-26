'use client';

import { useState, useEffect } from 'react';

import BeatCard from '@/components/BeatCard';

const BeatCardList = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4 place-content-center m-10">
      {data.map((beat) => (
        <BeatCard
          key={beat.id}
          id={beat.id}
          notes={beat.notes}
          mix={beat.mix}
          instruments={beat.instruments}
          creator={beat.creator}
          title={beat.title}
          color1={beat.color1}
          color2={beat.color2}
          plays={beat.plays}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchBeats = async () => {
      const response = await fetch('/api/beat');
      const data = await response.json();
      setBeats(data);
    };

    fetchBeats();
  }, []);

  return <BeatCardList data={beats} />;
};

export default Feed;

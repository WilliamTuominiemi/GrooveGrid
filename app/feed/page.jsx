'use client';

import { useState, useEffect } from 'react';

import BeatCard from '@/components/BeatCard';

const BeatCardList = ({ data }) => {
  //   console.log('data', data);

  data.map((beat) => {
    console.log(beat);
  });

  return (
    <div className="grid grid-cols-4 gap-4 place-content-center ">
      {data.map((beat) => (
        <BeatCard
          key={beat.id}
          notes={beat.notes}
          mix={beat.mix}
          instruments={beat.instruments}
          creator={beat.creator}
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

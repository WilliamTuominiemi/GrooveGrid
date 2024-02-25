'use client';

import { useState, useEffect } from 'react';

const Feed = () => {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchBeats = async () => {
      const response = await fetch('/api/beat');
      const data = await response.json();
      console.log(data);
      setBeats(data);
    };

    fetchBeats();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
    </div>
  );
};

export default Feed;

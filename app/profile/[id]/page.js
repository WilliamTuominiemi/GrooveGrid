'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

import BeatCard from '@/components/ProfileBeatCard';

const BeatCardList = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center m-5">
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

const Profile = ({ params }) => {
  const { data: session } = useSession();

  const [beats, setBeats] = useState([]);

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchBeats = async () => {
      if (params) {
        const response = await fetch(`/api/beat/${params.id}`);
        const data = await response.json();
        setBeats(data);
      }
    };

    const fetchUser = async () => {
      if (params) {
        const response = await fetch(`/api/profile/${params.id}`);
        const data = await response.json();
        setUser(data);
        console.log(data);
      }
    };

    fetchBeats();
    fetchUser();
  }, [params]);

  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-row gap-4">
          <div className="m-5">
            <div className="flex items-center m-2">
              <Image
                src={user.image}
                width={40}
                height={40}
                className="rounded-full object-cover mr-4 cursor-pointer"
                alt="profile"
              />
              <h1 className="text-xl font-medium text-gray-800">{user.name}</h1>
            </div>
            <div className="flex flex-col">
              <p className="m-2">{user.description}</p>
              <p className="text-gray-600 m-2">tracks produced: {beats.length}</p>
            </div>
          </div>
          <BeatCardList data={beats} />
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center px-6 py-4">
          <h1 className="text-5xl font-bold text-center text-MidnightPowderBlue">404</h1>
          <p className="text-xl text-gray-800 mt-4">We can't seem to find the profile you're looking for.</p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 mt-8 font-bold text-white bg-MidnightPowderBlue rounded hover:bg-NavyPaleAqua focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dustyTurquoise"
          >
            Go Back Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;

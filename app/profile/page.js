'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

import BeatCard from '@/components/BeatCard';

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
          title={beat.title}
          color1={beat.color1}
          color2={beat.color2}
        />
      ))}
    </div>
  );
};

const Profile = () => {
  const { data: session, status } = useSession();

  const [beats, setBeats] = useState([]);
  const [user, setUser] = useState();

  const [description, setDescription] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const fetchBeats = async () => {
      if (session) {
        const response = await fetch(`/api/beat/${session.user.id}`);
        const data = await response.json();
        setBeats(data);
      }
    };

    const fetchUser = async () => {
      if (session) {
        const response = await fetch(`/api/profile/${session.user.id}`);
        const data = await response.json();
        setUser(data);
        setDescription(data.description);
      }
    };

    fetchBeats();
    fetchUser();
  }, [session]);

  const handleChange = (event) => {
    setDescription(event.target.value);
    setShowButton(event.target.value.length > 0); // Show button only if text exists
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/profile/updateDescription', {
        method: 'POST',
        body: JSON.stringify({ description }),
      });

      setShowButton(false);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      {session?.user ? (
        <div className="flex flex-row gap-4">
          <div className="m-5">
            <div className="flex items-center m-2">
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className="rounded-full object-cover mr-4 cursor-pointer"
                alt="profile"
              />
              <h1 className="text-xl font-medium text-gray-800">{session?.user.name}</h1>
            </div>
            <div className="flex flex-col">
              <textarea
                id="description"
                name="description"
                maxLength="50"
                placeholder="Write your description"
                rows="2"
                className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                value={description}
                onChange={handleChange}
              />
              {showButton && (
                <button
                  type="button"
                  className="mt-2 px-4 py-2 rounded-md bg-DarkSoftSkyBlue text-white hover:bg-DeepMutedLavenderBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              )}
              <p className="text-gray-600 m-2">tracks produced: {beats.length}</p>
            </div>
          </div>
          <BeatCardList data={beats} />
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center px-6 py-4">
          <h1 className="text-5xl font-bold text-center text-MidnightPowderBlue">Not logged in</h1>
          <p className="text-xl text-gray-800 mt-4">You need to log in to view this page.</p>
          <a
            onClick={() => signIn('google')}
            className="inline-flex items-center px-4 py-2 mt-8 font-bold text-white bg-MidnightPowderBlue rounded hover:bg-NavyPaleAqua focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dustyTurquoise"
          >
            Log in
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;

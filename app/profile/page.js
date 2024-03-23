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

const Profile = () => {
  const { data: session } = useSession();

  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchBeats = async () => {
      if (session) {
        console.log(`/api/beat/${session.user.id}`);
        const response = await fetch(`/api/beat/${session.user.id}`);
        const data = await response.json();
        setBeats(data);
      }
    };

    fetchBeats();
  }, [session]);

  const [description, setDescription] = useState('');
  const [showButton, setShowButton] = useState(false);

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

      if (response.ok) {
        console.log('Description updated');
      } else {
        console.error('Error updating description:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

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
        <p>signIn </p>
      )}
    </div>
  );
};

export default Profile;

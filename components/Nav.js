'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-3 px-6 bg-paleAqua shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link href="/" className="text-lg font-bold  text-DeepMutedLavenderBlue">
          🎶 GrooveGrid
        </Link>
      </div>

      <div className="flex space-x-10">
        <Link href="/" className="text-sm text-gray-700 hover:text-DeepMutedLavenderBlue transition duration-300">
          🎛️ Produce
        </Link>

        <Link href="/feed" className="text-sm text-gray-700 hover:text-StormyDustyTurquoise transition duration-300">
          📰 Feed
        </Link>

        {session?.user ? (
          <>
            <div className="relative inline-block">
              <button
                type="button"
                className="overflow-hidden focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown state
              >
                <Image
                  src={session?.user.image}
                  width={20}
                  height={20}
                  className="rounded-md cursor-pointer"
                  alt="profile"
                />
              </button>

              {isDropdownOpen && ( // Conditionally render dropdown content
                <div
                  className="absolute right-0 z-10 origin-top-right focus:outline-none"
                  role="menu"
                  aria-labelledby="menu-button"
                >
                  <div className="rounded-md shadow-sm py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      type="button"
                      onClick={signOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => signIn('google')}
            className="text-sm text-white  bg-MidnightPowderBlue bg-opacity-50 px-1 rounded-md hover:bg-NavyPaleAqua focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dustyTurquoise"
          >
            🖊️ Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;

'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="w-full mb-1 pt-1 bg-paleAqua">
      <Link href="/" className="text-lg">
        GrooveGrid
      </Link>

      <Link href="/" className="m-1 p-1">
        Produce
      </Link>

      <Link href="/feed" className="m-1 p-1">
        Feed
      </Link>

      {session?.user ? (
        <>
          <button type="button" onClick={signOut}>
            Sign Out
          </button>

          <Link href="/profile">
            <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" />
          </Link>
        </>
      ) : (
        <button type="button" onClick={() => signIn('google')}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Nav;

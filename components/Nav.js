'use client';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
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
    </nav>
  );
};

export default Nav;

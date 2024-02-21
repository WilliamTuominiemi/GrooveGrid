import { Inter } from 'next/font/google';
import './globals.css';

import Nav from '@/components/Nav';

export const metadata = {
  title: 'GrooveGrid',
  description: 'GrooveGrid music studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-powderBlue">
        <Nav />
        {children}
      </body>
    </html>
  );
}

import './globals.css';

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'GrooveGrid',
  description: 'GrooveGrid music studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-powderBlue">
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}

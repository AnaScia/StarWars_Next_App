import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './Components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Star Wars',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

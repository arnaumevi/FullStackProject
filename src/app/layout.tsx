import { Navbar } from '../components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${inter.className} min-h-screen pt-12 bg-slate-50 antialiased`}
    >
      <Navbar />
      <div className="container max-w-7xl mx-auto h-full pt-15">{children}</div>
    </div>
  );
};

export default RootLayout;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
import SnowEffect from '@/components/Effects/SnowEffect';
import { LoadingProvider } from '@/components/providers/LoadingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aufit - Premium AC Solutions',
  description: 'Leading manufacturer of air conditioning systems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <SnowEffect />
          <Navbar />
          <div className="pt-16 relative z-10">{children}</div>
        </LoadingProvider>
      </body>
    </html>
  );
}
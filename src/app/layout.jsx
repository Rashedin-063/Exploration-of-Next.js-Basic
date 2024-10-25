import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Next.js Crash Course',
  description: 'Generated Self Learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${roboto_mono.variable} `}>
      <body
        className='max-w-7xl mx-auto px-4 bg-blue-950'
        suppressHydrationWarning
      >
        <Navbar />

        <div className={`min-h-screen pt-8 bg-blue-950 `}>{children}</div>
        <footer className='h-20'></footer>
      </body>
    </html>
  );
}
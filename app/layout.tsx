import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Rapid Response Plumbing Melbourne | 24/7 Emergency Plumber',
    template: '%s | Rapid Response Plumbing'
  },
  description: 'Melbourne\'s trusted plumbing experts. Available 24/7 for emergency plumbing, blocked drains, hot water systems, and all plumbing services across Melbourne.',
  keywords: ['plumber Melbourne', 'emergency plumber', 'blocked drains', 'hot water systems', 'plumbing services Melbourne', '24/7 plumber'],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Rapid Response Plumbing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

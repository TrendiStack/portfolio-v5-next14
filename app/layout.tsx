import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/navigation/Nav';
import ClientLoader from '@/components/ClientLoader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Terel Phillips - Designer - Developer - Toronto, Ontario',
  description:
    'An inquisitive developer rooted in the vibrant city of Toronto, Ontario.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLoader>
          <Nav />
          {children}
          <Footer />
        </ClientLoader>
      </body>
    </html>
  );
}

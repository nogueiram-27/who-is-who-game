import '@/app/ui/global.css';

import { Metadata } from 'next';

import { rethink } from '@/app/ui/font';
import Heaader  from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Wrap from '@/app/ui/wrap';

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rethink.className} antialiased relative bg-dark-purple-gradient h-screen`}>
        <Heaader/>
        <Wrap>
          {children}
        </Wrap>
        <Footer/>
      </body>
    </html>
  );
}

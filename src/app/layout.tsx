import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Imad ZNITI prof',
  // TODO: mettre le description a jour
  description: 'lEARN FRENSH',
  icons: '/favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn(`${poppins.className} scroll-smooth `)}>
        <main>{children}</main>
      </body>
    </html>
  );
}

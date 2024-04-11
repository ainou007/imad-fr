'use client';
import Logo from '@/components/logo';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/constants/navLinks';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
const Navbar = () => {
  const [hash, setHash] = useState<string | undefined>('');

  console.log(hash);
  return (
    <nav className='fixed left-0 top-0 z-50 w-full bg-white shadow-lg '>
      <div className='container flex h-20 items-center justify-between'>
        <Logo />
        <div className='hidden items-center gap-5 lg:flex'>
          <ul className='flex gap-5'>
            {navLinks.map((link, index) => {
              const { label, route } = link;
              return (
                <Link
                  onClick={() => {
                    setHash(route);
                  }}
                  className='capitalize'
                  key={index}
                  href={route}>
                  {label}
                </Link>
              );
            })}
          </ul>
          {/* <Connection /> */}
        </div>

        <Sheet>
          <SheetTrigger className='flex lg:hidden'>
            <AiOutlineMenu />
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className='my-5'></div>
            <ul className='flex flex-col gap-3'>
              {navLinks.map((link, index) => {
                const { label, route } = link;
                return (
                  <li key={index} className=''>
                    <SheetClose asChild>
                      <Link href={route}> {label} </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;

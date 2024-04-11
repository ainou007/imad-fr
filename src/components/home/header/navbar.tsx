import Logo from '@/components/logo';
import { buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/constants/navLinks';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className='fixed left-0 top-0 z-50 w-full bg-white shadow-lg '>
      <div className='container flex h-20 items-center justify-between'>
        <Logo />
        <div className='hidden items-center gap-5 lg:flex'>
          <ul className='flex gap-5'>
            {navLinks.map((link, index) => {
              const { label, route } = link;
              return (
                <Link className='capitalize' key={index} href={route}>
                  {label}
                </Link>
              );
            })}
          </ul>
          <div className='flex gap-2'>
            <Link className={buttonVariants({ size: 'sm' })} href={'/login'}>
              Se connecter
            </Link>
            <Link className={buttonVariants({ variant: 'outline', size: 'sm' })} href={'/register'}>
              Rejoignez-nous{' '}
            </Link>
          </div>
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
              <ul>
                {navLinks.map((link, index) => {
                  const { label, route } = link;
                  return (
                    <li key={index}>
                      <Link href={route}> {label} </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;

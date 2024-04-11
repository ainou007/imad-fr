import Logo from '@/components/logo';
import { navLinks } from '@/constants/navLinks';
import { socialMedia } from '@/constants/socialMedia';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-600'>
      {/* Main Footer */}
      <div className='container flex flex-col gap-5 py-16 md:flex-row md:gap-10'>
        {/* Description */}
        <div className='space-y-4 md:w-6/12 lg:flex lg:items-center lg:gap-5'>
          <div className=''>
            <Logo />
          </div>
          <p className=''>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum saepe laboriosam. Voluptatibus iusto, fuga facere alias ea voluptatum,
            laudantium sunt ut voluptatem optio praesentium labore autem quam debitis quia!
          </p>
        </div>
        {/* Links */}
        <div className='md:w-3/12'>
          <h2 className='mb-3 text-xl font-bold capitalize'>Links</h2>
          <ul className='flex flex-col gap-2'>
            {navLinks.map((link, index) => {
              const { label, route } = link;
              return (
                <li key={index} className='  '>
                  <Link href={route}> {label} </Link>{' '}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social Media */}
        <div className='md:3/12'>
          <h2 className='mb-3 text-xl font-bold capitalize'>Trouvez-nous sur</h2>
          <ul className='flex gap-1'>
            {socialMedia.map((item, index) => {
              const { icon: Icon } = item;
              return (
                <li key={index}>
                  <Link className='flex size-12 items-center justify-center rounded-full border' href=''>
                    <Icon size={20} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Rights */}
      <div className='bg-gray-50 p-5 text-center text-xs'>
        Tous droits réservés pour{' '}
        <Link className='font-semibold text-primary' href={'/'}>
          Imad ZNITI{' '}
        </Link>
        2024
      </div>
    </footer>
  );
};
export default Footer;

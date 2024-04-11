import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'#home'}>
      <div className='flex items-center gap-1'>
        <div
          className='flex h-8 w-12 overflow-hidden bg-primary p-1.5'
          style={{
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <div className='w-1/3 rounded-l-3xl bg-red-500 '></div>
          <div className='w-1/3 bg-white'></div>
          <div className='w-1/3 rounded-tr-2xl bg-blue-600 '></div>
        </div>
        <div className=' font-black uppercase leading-none text-primary'>
          Imad <br /> zniti
          <sub className='text-xxs font-light lowercase text-gray-800'>prof</sub>
        </div>
      </div>
    </Link>
  );
};
export default Logo;

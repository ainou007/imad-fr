import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Connection = () => {
  return (
    <div className='flex gap-2'>
      <Link className={buttonVariants({ size: 'sm' })} href={'/login'}>
        Se connecter
      </Link>
      <Link className={buttonVariants({ variant: 'outline', size: 'sm' })} href={'/register'}>
        Rejoignez-nous{' '}
      </Link>
    </div>
  );
};
export default Connection;

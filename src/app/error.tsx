'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className='container mx-auto mt-44 w-fit space-y-5 text-center'>
      <p className='text-xl text-gray-600'>{error.message} </p>
      <div className='flex items-center justify-center gap-2 '>
        <Button onClick={reset}>Reload</Button>
        <Link className={buttonVariants({ variant: 'outline' })} href='/'>
          {' '}
          Go back home{' '}
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;

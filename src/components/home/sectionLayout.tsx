'use client';
import { HTMLProps, ReactNode } from 'react';

interface SectionLayoutProps extends HTMLProps<HTMLDivElement> {}

const SectionLayout = ({ children, id }: { children: any; id: string }) => {
  return (
    <section id={id} className='min-w-screen relative flex  w-full flex-col items-center justify-center  py-32 text-gray-600'>
      {children}
    </section>
  );
};
export default SectionLayout;

import { ReactNode } from 'react';

const SectionLayout = ({ children }: { children: ReactNode }) => {
  return <section className='min-w-screen relative flex  w-full flex-col items-center justify-center py-16 text-gray-600 md:py-24'>{children}</section>;
};
export default SectionLayout;

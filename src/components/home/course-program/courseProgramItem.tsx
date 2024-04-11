import { buttonVariants } from '@/components/ui/button';
import { CourseProgam, courseDirectionsDisplay } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheck2Square } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';

const CourseProgramItem = (courseProgramItem: CourseProgam) => {
  const { title, description, img, features, direction, route } = courseProgramItem;
  return (
    <div className='flex flex-col items-center justify-between lg:flex-row'>
      <Image width={450} className={`order-1 ${direction === courseDirectionsDisplay.rtl ? 'md:order-1' : 'md:order-2'}`} src={img} alt='' />
      <div className={`order-2 w-full space-y-6 lg:w-1/2 md:${direction === courseDirectionsDisplay.rtl ? 'order-2' : 'order-1'}`}>
        <h3 className='text-2xl font-semibold'> {title} </h3>
        <p>{description}</p>
        <ul className='space-y-2'>
          {features.map((feat, index) => {
            return (
              <li className='flex items-center gap-2 font-semibold' key={index}>
                <BsCheck2Square className='text-green-800' /> {feat}
              </li>
            );
          })}
        </ul>
        <Link href={route} className={buttonVariants()}>
          découvrir plus <MdNavigateNext />
        </Link>
      </div>
    </div>
  );
};
export default CourseProgramItem;

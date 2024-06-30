import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { FaSmileWink } from 'react-icons/fa';
import { FaPeoplePulling } from 'react-icons/fa6';
import hero_img from '../../../../public/prof.png';
import State from '@/components/home/header/state';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className='relative flex min-h-screen items-center justify-center py-24 text-gray-600'>
      {/* background */}
      <div className='absolute inset-0 -z-10 bg-hero bg-cover bg-bottom bg-no-repeat opacity-40 blur-lg'></div>

      {/* Content */}
      <div className='container flex flex-col items-center justify-between gap-5 lg:flex-row'>
        {/* Title and description  */}
        <div className='order-2 w-full space-y-5 lg:order-1 lg:w-8/12  '>
          <h1 className='text-center text-2xl font-semibold leading-tight md:text-3xl lg:text-left lg:text-5xl'>
            Apprenez le français avec le meilleur professeur
          </h1>
          <p className='mt-4 text-center text-sm md:text-base lg:text-left lg:text-xl'>
            Découvrez l&lsquo;art de la langue française avec un professeur passionné et expérimenté. Améliorez votre compréhension, votre expression et votre
            prononciation grâce à des cours personnalisés adaptés à tous les niveaux. Rejoignez dès aujourd&lsquo;hui et maîtrisez le français avec confiance !
          </p>
          <div className='flex flex-col gap-4 xs:flex-row'>
            <State stateNumber='300k+' lable='Abonnés sur youtube' />
            <State stateNumber='3k+' lable="D'étudiants  bénéficiaires" />
            <State stateNumber='8' lable="Ans d'expérience" />
          </div>
          {/*  */}
          <div className='flex flex-col gap-3 xs:flex-row'>
            <Link href={'#courseProgram'} className={buttonVariants()}>
              <FaSmileWink size={18} />
              Allons-y
            </Link>{' '}
            <Link
              href='https://wa.me/+212645052133?text=je%20suis%20int%C3%A9ress%C3%A9%20%C3%A0%20vous%20rejoindre'
              target='_blank'
              className={cn(buttonVariants({ variant: 'outline' }))}>
              <FaPeoplePulling size={18} />
              Rejoignez nous
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='order-1 w-full  md:w-96 lg:order-2 lg:w-4/12'>
          <Image priority className='grayscale' src={hero_img} alt='' />
        </div>
        {/* Arrow dow (Next Section ) */}
        <div className='absolute  bottom-6 left-1/2 hidden -translate-x-1/2 lg:block  '>
          <Link href='#courseProgram'>
            <MdKeyboardDoubleArrowDown className='animate-bounce text-5xl text-primary' />
          </Link>
        </div>
      </div>

      {/*  */}
    </div>
  );
};
export default Hero;

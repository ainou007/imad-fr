import { Guarantee } from '@/lib/types';
import Image from 'next/image';

const GuaranteeItem = (guarantees: Guarantee) => {
  const { title, description, img } = guarantees;
  return (
    <div className='relative flex w-full  flex-col items-center gap-4 rounded-lg p-5 shadow-p lg:w-1/3'>
      <Image width={150} src={img} alt='' />
      <h3 className='text-2xl font-semibold'> {title} </h3>
      <p>{description}</p>
    </div>
  );
};
export default GuaranteeItem;

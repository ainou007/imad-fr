interface TestimonialProps {
  name: string;
  description: string;
  img: string;
}
const Testimonial = ({ name, description, img }: TestimonialProps) => {
  return (
    <div className='mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-600 shadow-md'>
      <div className='mb-4 flex w-full items-center'>
        <div className='size-10 basis-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50'>
          <img className='aspect-square size-10 w-full object-cover' src={img} alt='' />
        </div>
        <div className='flex-grow pl-3'>
          <h6 className='text-sm font-bold capitalize text-gray-600'> {name} </h6>
        </div>
      </div>
      <div className='w-full'>
        <p className=''>
          <span className='mr-1 text-lg font-bold italic leading-none text-gray-400'>&quot;</span>
          {description}
          <span className='ml-1 text-lg font-bold italic leading-none text-gray-400'>&quot;</span>
        </p>
      </div>
    </div>
  );
};
export default Testimonial;

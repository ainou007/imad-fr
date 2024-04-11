type SectionTitleProps = {
  title: string;
  description: string;
};
const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className='w-full'>
      <h1 className='mb-5 text-center text-4xl font-bold uppercase text-gray-600 xs:text-5xl sm:text-6xl'>{title}</h1>
      <p className='mb-5 text-center text-xl'> {description} </p>
      <div className='mb-10 text-center'>
        <span className='ml-1 inline-block h-1 w-1 rounded-full bg-primary'></span>
        <span className='mx-1 inline-block h-1 w-3 rounded-full bg-primary'></span>
        <span className='inline-block h-1 w-40 rounded-full bg-primary'></span>
        <span className='ml-1 inline-block h-1 w-3 rounded-full bg-primary'></span>
        <span className='ml-1 inline-block h-1 w-1 rounded-full bg-primary'></span>
      </div>
    </div>
  );
};
export default SectionTitle;

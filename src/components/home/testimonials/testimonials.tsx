import SectionLayout from '@/components/home/sectionLayout';
import SectionTitle from '@/components/home/sectionTitle';
import Testimonial from '@/components/home/testimonials/testimonial';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <SectionLayout id='testimonials'>
      <div className='container'>
        <SectionTitle
          title="OPINIONS D'ÉTUDIANTS"
          description="Découvrez les opinions authentiques des étudiants sur leur expérience d'apprentissage avec nous."
        />
        <div className='items-start md:flex md:gap-5'>
          {testimonials.map((item, index) => {
            return (
              <div className='md:w-1/2' key={index}>
                {item.col.map((testimonial, index) => {
                  const { name, description, img } = testimonial;
                  return <Testimonial key={index} name={name} description={description} img={img} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};
export default Testimonials;

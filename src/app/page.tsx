import CourseProgram from '@/components/home/course-program/courseProgram';
import Footer from '@/components/home/footer/footer';
import Guarantees from '@/components/home/guarantees/guarantees';
import Header from '@/components/home/header/header';
import Testimonials from '@/components/home/testimonials/testimonials';

const HomePage = () => {
  return (
    <div className=''>
      <Header />
      <CourseProgram />
      <Guarantees />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default HomePage;

import SectionTitle from '@/components/home/sectionTitle';
import SectionLayout from '@/components/home/sectionLayout';
import { coursProgram } from '@/constants/courseProgram';
import CourseProgramItem from '@/components/home/course-program/courseProgramItem';
const CourseProgram = () => {
  return (
    <SectionLayout>
      <div className='container'>
        <SectionTitle title='programme des cours' description='Tu auras accès à tous les cours et tous les niveaux !' />
        <div className='space-y-10'>
          {coursProgram.map((item, index) => {
            return <CourseProgramItem {...item} key={index} />;
          })}
        </div>
      </div>
    </SectionLayout>
  );
};
export default CourseProgram;

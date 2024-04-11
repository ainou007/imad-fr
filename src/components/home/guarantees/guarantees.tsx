import Effect from '@/components/effect';
import GuaranteeItem from '@/components/home/guarantees/guaranteeItem';
import SectionLayout from '@/components/home/sectionLayout';
import SectionTitle from '@/components/home/sectionTitle';
import { guarantees } from '@/constants/guarantees';

const Guarantees = () => {
  return (
    <SectionLayout>
      <SectionTitle title='Que vais-je vous garantir ?' description='Tu vas pouvoir apprendre de façon organisée, à ton rythme et dans le plaisir  !' />
      <div className='container relative flex  flex-col justify-between gap-8 text-center lg:flex-row'>
        {guarantees.map((item, index) => {
          return <GuaranteeItem {...item} key={index} />;
        })}
      </div>
    </SectionLayout>
  );
};
export default Guarantees;

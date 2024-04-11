interface stateProps {
  stateNumber: string;
  lable: string;
}
const State = ({ stateNumber, lable }: stateProps) => {
  return (
    <div className='flex w-full flex-col items-center gap-2 text-center lg:flex-row  lg:text-left'>
      <div className='text-2xl font-semibold xs:text-3xl'> {stateNumber} </div>
      <div className='xs:text-base'> {lable} </div>
    </div>
  );
};
export default State;

import { cn } from '@/lib/utils';
import blob from '/public/blob.png';

const Effect = ({ className = '' }: { className?: string }) => {
  return <div className={cn(`absolute -z-50 size-20 bg-blob bg-cover ${className}`)}></div>;
};
export default Effect;

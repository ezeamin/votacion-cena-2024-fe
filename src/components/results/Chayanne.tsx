import useTimer from '@/hooks/useTimer';

import { cn } from '@/lib/utils';

const Chayanne = () => {
  const timesUp = useTimer();

  return (
    <div
      className={cn(
        'absolute bottom-0 transition-all duration-1000 hidden md:block',
        timesUp ? 'right-0' : 'right-[-300px]'
      )}
    >
      <img src="/chayanne.png" className="w-[250px]" width={250} />
    </div>
  );
};
export default Chayanne;

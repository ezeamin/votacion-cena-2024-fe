import { cn } from '@/lib/utils';
import { useTimerStatus } from '@/stores/useTimerStatus';

const Chayanne = () => {
  const { timesUp } = useTimerStatus();

  return (
    <div
      className={cn(
        'absolute bottom-0 hidden transition-all duration-1000 md:block',
        timesUp ? 'right-0' : 'right-[-300px]'
      )}
    >
      <img src="/chayanne.png" className="w-[250px]" width={250} />
    </div>
  );
};
export default Chayanne;

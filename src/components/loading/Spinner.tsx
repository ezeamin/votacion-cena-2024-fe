import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const Spinner = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn('sk-cube-grid', className)}>
      <div className="sk-cube sk-cube1 bg-white" />
      <div className="sk-cube sk-cube2 bg-white" />
      <div className="sk-cube sk-cube3 bg-white" />
      <div className="sk-cube sk-cube4 bg-white" />
      <div className="sk-cube sk-cube5 bg-white" />
      <div className="sk-cube sk-cube6 bg-white" />
      <div className="sk-cube sk-cube7 bg-white" />
      <div className="sk-cube sk-cube8 bg-white" />
      <div className="sk-cube sk-cube9 bg-white" />
    </div>
  );
};
export default Spinner;

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

type Props = {
  children: ReactNode;
  type?: 'info' | 'warning' | 'error';
  className?: string;
};

const Alert = (props: Props) => {
  const { children, type = 'info', className } = props;

  let icon = <Info className="inline text-blue-500" />;
  let colors = 'bg-blue-500/10 text-blue-500';
  switch (type) {
    case 'warning':
      icon = <Info className="inline text-yellow-700" />;
      colors = 'bg-yellow-500/10 text-yellow-700';
      break;
    case 'error':
      icon = <Info className="inline text-red-700" />;
      colors = 'bg-red-500/10 text-red-700';
      break;
  }

  return (
    <div role="alert" className={cn(`alert ${colors}`, className)}>
      {icon}
      <span>{children}</span>
    </div>
  );
};
export default Alert;

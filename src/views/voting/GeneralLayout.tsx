import useTimer from '@/hooks/useTimer';

import { Outlet } from 'react-router';

const GeneralLayout = () => {
  useTimer();

  return (
    <div className="md:px-16 lg:px-96">
      <Outlet />
    </div>
  );
};
export default GeneralLayout;

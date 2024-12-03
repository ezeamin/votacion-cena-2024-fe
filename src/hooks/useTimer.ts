import { useEffect, useState } from 'react';

import { useSocket } from '@/stores/useSocket';
import { useLocation, useNavigate } from 'react-router';

const useTimer = () => {
  const [timesUp, setTimesUp] = useState(false);

  const { onSocket } = useSocket();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    onSocket('timer finished', () => {
      setTimesUp(true);
      if (pathname !== 'timeout') navigate('/timeout');
    });
  }, [navigate, onSocket, pathname]);

  return timesUp;
};
export default useTimer;

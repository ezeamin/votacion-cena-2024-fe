import { useEffect } from 'react';

import { useSocket } from '@/stores/useSocket';
import { useTimerStatus } from '@/stores/useTimerStatus';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';

const useTimer = () => {
  const { onSocket } = useSocket();
  const { setTimesUp } = useTimerStatus();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    onSocket('timerFinished', () => {
      setTimesUp(true);

      toast.info('El contador ha finalizado!');

      if (
        pathname !== '/general' &&
        !pathname.includes('results') &&
        !pathname.includes('timeout')
      )
        navigate('/general/timeout');
    });

    onSocket('timer', () => {
      setTimesUp(false);
    });
  }, [navigate, onSocket, pathname, setTimesUp]);
};

export default useTimer;

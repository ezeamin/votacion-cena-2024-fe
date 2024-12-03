import { useEffect, useState } from 'react';

import { useSocket } from '@/stores/useSocket';
import { toast } from 'sonner';

type Props = {
  title?: boolean;
};

const Timer = (props: Props) => {
  const { title } = props;

  const { onSocket } = useSocket();

  const [timer, setTimer] = useState('03:00');

  useEffect(() => {
    // Update the timer locally every second
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === '') return '';

        const [minutes, seconds] = prevTimer.split(':');
        let totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
        totalSeconds -= 1;

        if (totalSeconds < 0) {
          clearInterval(intervalId);
          return '00:00';
        }

        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds - newMinutes * 60;

        return `${String(newMinutes).padStart(2, '0')}:${String(
          newSeconds
        ).padStart(2, '0')}`;
      });
    }, 1000);

    // Listen for timer updates from the backend via WebSocket
    onSocket('timer', (apiData: unknown) => {
      if (typeof apiData === 'number') {
        const minutes = Math.floor(apiData / 60);
        const seconds = apiData - minutes * 60;

        setTimer(
          `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
          )}`
        );
      }
    });

    onSocket('timer finished', () => {
      toast.info('El contador ha finalizado!');
      setTimer('');
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [onSocket, setTimer]);

  const littleTime = timer.at(1) === '0' && Number(timer.at(3)) < 3;

  if (title)
    return (
      <p
        className={`relative z-20 text-center text-sm ${littleTime ? 'animate-pulse text-red-300' : ''}`}
      >
        {timer}
      </p>
    );

  return (
    <div className="text-center">
      <p>Tiempo restante</p>
      <p
        className={`text-3xl md:text-5xl ${littleTime ? 'animate-pulse text-red-300' : ''}`}
      >
        {timer}
      </p>
    </div>
  );
};
export default Timer;

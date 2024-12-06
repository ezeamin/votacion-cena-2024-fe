import { useEffect, useState } from 'react';

import { useSocket } from '@/stores/useSocket';

type Props = {
  title?: boolean;
};

const Timer = (props: Props) => {
  const { title } = props;

  const { onSocket } = useSocket();

  const [timer, setTimer] = useState('');

  useEffect(() => {
    // Listen for timer updates from the backend via WebSocket
    onSocket('timer', (apiData: unknown) => {
      const time = apiData as { timer: number };

      if (typeof time.timer === 'number') {
        const minutes = Math.floor(time.timer / 60);
        const seconds = time.timer - minutes * 60;

        setTimer(
          `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
          )}`
        );
      }
    });

    onSocket('timerFinished', () => {
      setTimer('');
    });
  }, [onSocket, setTimer]);

  const littleTime = timer.at(1) === '0' && Number(timer.at(3)) < 3;

  if (title)
    return (
      <p
        className={`relative z-20 text-center text-sm ${littleTime ? 'animate-pulse text-red-300' : ''}`}
      >
        {timer === '' ? '00:00' : timer}
      </p>
    );

  return (
    <div className="text-center">
      <p>Tiempo restante</p>
      <p
        className={`text-3xl md:text-5xl ${littleTime ? 'animate-pulse text-red-300' : ''}`}
      >
        {timer === '' ? '00:00' : timer}
      </p>
    </div>
  );
};
export default Timer;

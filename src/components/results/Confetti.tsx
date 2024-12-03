import useTimer from '@/hooks/useTimer';

import ReactConfetti from 'react-confetti';

const { width, height } = window.screen;

const Confetti = () => {
  const timesUp = useTimer();

  (document.querySelector('html') as HTMLHtmlElement).classList.add(
    'md:overflow-hidden'
  );

  if (!timesUp) return null;

  return <ReactConfetti width={width} height={height} />;
};
export default Confetti;

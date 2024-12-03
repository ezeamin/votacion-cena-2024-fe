import useTimer from '@/hooks/useTimer';

import { Link, useNavigate } from 'react-router';

const TimeoutView = () => {
  const timesUp = useTimer();

  const navigate = useNavigate();

  if (!timesUp) navigate('/general');

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Tiempo terminado ⏱️😶</h1>
      <p className="mt-5 text-balance">
        Ya no se puede registrar un voto. Podes ver los resultados en el
        siguiente enlace.
      </p>
      <Link
        to="/general/results"
        className="btn btn-primary mt-10 text-lg uppercase text-white"
      >
        Ver resultados
      </Link>
    </section>
  );
};
export default TimeoutView;

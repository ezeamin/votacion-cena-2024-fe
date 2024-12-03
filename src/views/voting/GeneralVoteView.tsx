import { useState } from 'react';

import Alert from '@/components/alert/Alert';

import { Info } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router';

const GeneralVoteView = () => {
  const connected = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO when EPs are implemented
  const [votingEnabled, setVotingEnabled] = useState(true);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isDupped = !!searchParams.get('dupped');

  const handleClick = () => {
    if (!votingEnabled) return;

    navigate('/general/king');
  };

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Votación Sistemas 2024</h1>
      <p className="mt-5">Conectados: {connected}</p>
      {isDupped ? (
        <>
          <Alert className="mt-16 text-lg">No podes volver a votar 👮🏼‍♂️</Alert>
          <Link
            to="/general/results"
            className="btn btn-primary mt-5 text-lg uppercase text-white"
          >
            Ver resultados
          </Link>
        </>
      ) : (
        <>
          <button
            disabled={!votingEnabled}
            type="button"
            className="btn btn-primary mt-10 text-lg uppercase text-white"
            onClick={handleClick}
          >
            Iniciar
          </button>
          {!votingEnabled && (
            <p className="mt-3 flex animate-pulse items-center text-xs">
              <Info className="mr-1 w-4" />
              Esperá. Pronto habilitaremos la votación.
            </p>
          )}
        </>
      )}
      <div className="mt-52 rounded-md bg-black/50 px-5 py-2 text-sm">
        <p>¿Querés sumar chances?</p>
        <p>¡100 ARS = 1 Chance!</p>
        <p>
          alias: <span className="font-bold">ezeamin-sant</span>
        </p>
      </div>
    </section>
  );
};
export default GeneralVoteView;

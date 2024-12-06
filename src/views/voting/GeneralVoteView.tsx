import { useEffect, useState } from 'react';

import Alert from '@/components/alert/Alert';

import { useSocket } from '@/stores/useSocket';
import { Info } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router';

const GeneralVoteView = () => {
  const [connected, setConnected] = useState(0);
  const [votingEnabled, setVotingEnabled] = useState(false);
  const { onSocket, emitSocket } = useSocket();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isDupped = !!searchParams.get('dupped');

  const handleClick = () => {
    if (!votingEnabled) return;

    navigate('/general/king');
  };

  useEffect(() => {
    emitSocket('getUsers', {});

    onSocket('updateUsers', (apiData: unknown) => {
      const data = apiData as {
        connectedUsers: number;
        isVotingEnabled: boolean;
      };

      setVotingEnabled(data.isVotingEnabled);
      setConnected(data.connectedUsers);
    });
  }, [onSocket, emitSocket]);

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Votación Sistemas 2024</h1>
      <p className="mt-5">
        Conectados:{' '}
        <span className="countdown">
          <span style={{ '--value': connected } as object}></span>
        </span>
      </p>
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

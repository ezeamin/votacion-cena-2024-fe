import Alert from '../alert/Alert';
import { Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

type Props = {
  isLoadingHasVoted: boolean;
  isDupped: boolean;
  votingEnabled: boolean;
};

const StartVotingButton = (props: Props) => {
  const { isLoadingHasVoted, isDupped, votingEnabled } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    if (!votingEnabled) return;

    navigate('/general/king');
  };

  if (isDupped) {
    return (
      <>
        <Alert className="mt-16 text-lg">No podes volver a votar 👮🏼‍♂️</Alert>
        <Link
          to="/general/results"
          className="btn btn-primary mt-5 text-lg uppercase text-white"
        >
          Ver resultados
        </Link>
      </>
    );
  }

  if (isLoadingHasVoted) {
    return (
      <button
        disabled
        type="button"
        className="btn btn-primary mt-10 w-[101px] animate-pulse text-lg uppercase text-white"
        onClick={handleClick}
      >
        ...
      </button>
    );
  }

  return (
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
  );
};
export default StartVotingButton;

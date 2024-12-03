import { useState } from 'react';

import useGetSelected from '@/hooks/useGetSelected';

import { postVote } from '@/api/api';
import { useMutation } from '@tanstack/react-query';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

type Props = {
  opened: boolean;
  setModalOpened: (opened: boolean) => void;
  king: string;
  queen: string;
};

const ConfirmModal = (props: Props) => {
  const { opened, king: kingId, queen: queenId, setModalOpened } = props;

  const [isLoading, setIsLoading] = useState(false);

  const { king, queen } = useGetSelected({ kingId, queenId });
  const navigate = useNavigate();

  const { mutate: vote } = useMutation({
    mutationFn: postVote,
    onSuccess: () => {
      setModalOpened(false);
      navigate('/general/finish');
    },
    onError: (error) => {
      toast.error(
        error.message === 'dupped'
          ? 'Emm... Ya votaste, no podés volver a hacerlo!!1! 👮🏼‍♂️'
          : 'Ocurrió un error al registrar la votación. Te redireccionamos a inicio para que intentes nuevamente. Culpá a Infra 🤷🏼‍♂️',
        {
          duration: 7000,
        }
      );
      setIsLoading(false);
      setModalOpened(false);
      navigate(`/general${error.message === 'dupped' ? '?dupped=true' : ''}`);
    },
  });

  if (kingId && queenId && (!king || !queen)) {
    toast.error(
      'Ups! Ocurrió un error al obtener los datos de la votación. Culpá a infra 🤷🏼‍♂️'
    );
    return null;
  }

  if (!kingId || !queenId || !king || !queen) {
    return null;
  }

  const handleBack = () => {
    setModalOpened(false);
    navigate('/general');
  };

  const handleFinish = async () => {
    setIsLoading(true);
    vote({ kingId: kingId.toString(), queenId: queenId.toString() });
  };

  return (
    <dialog
      id="confirm-modal"
      className={`modal ${opened ? 'modal-open' : ''}`}
    >
      <div className="modal-box text-center">
        <h3 className="text-lg font-bold">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              Enviando <Send className="w-5" />
            </div>
          ) : (
            'Confirmar'
          )}
        </h3>
        {isLoading ? (
          <span className="loading loading-dots loading-lg mt-4"></span>
        ) : (
          <>
            <p className="pb-1 pt-4">
              🤴🏼 Rey: <strong>{king.name} </strong>
            </p>
            <p className="pb-5">
              👸🏼 Reina: <strong>{queen.name}</strong>
            </p>
            <button
              type="button"
              className="btn btn-primary mr-4 uppercase text-white"
              onClick={handleFinish}
            >
              Si, finalizar
            </button>
            <button
              onClick={handleBack}
              type="button"
              className="btn uppercase text-white"
            >
              Volver
            </button>
          </>
        )}
      </div>
    </dialog>
  );
};
export default ConfirmModal;

import { useState } from 'react';

import Alert from '@/components/alert/Alert';
import ConfirmModal from '@/components/voting/ConfirmModal';
import PersonOption from '@/components/voting/PersonOption';

import { fetchPeople } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { toast } from 'sonner';

import { Person } from '@/types';
import Timer from '@/components/voting/Timer';

type Props = {
  type: 'king' | 'queen';
};

const ListVoteView = (props: Props) => {
  const { type } = props;

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState<{
    king: string;
    queen: string;
  } | null>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: [`${type}-people`],
    queryFn: () => fetchPeople({ type }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === 'king') {
      setSelectedPerson(null);
      navigate(`/general/queen?king=${selectedPerson}`);
      return;
    }

    const selectedKing = searchParams.get('king');
    if (!selectedKing) {
      toast.error(
        'Ocurrió un error al registrar la votación. Por favor, volve a inicio e intentá nuevamente'
      );
      return;
    }

    setModalData({
      king: selectedKing as string,
      queen: selectedPerson as string,
    });
    setModalOpened(true);
  };

  return (
    <section>
      <div className="fixed left-0 top-0 w-full px-6 pb-4 pt-6 md:px-16 lg:px-96">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 ${isError ? 'h-26' : 'h-32'} bg-gradient-to-b from-gray-900 via-gray-900/75 to-transparent transition-all duration-500`}
        ></div>
        <h1 className="relative z-20 text-center text-[1.6rem]">
          Votación para {type === 'king' ? 'Rey 🤴🏼' : 'Reina 👸🏼'}
        </h1>
        <Timer title/>
      </div>
      <form className="mt-20" onSubmit={handleSubmit}>
        {isError && (
          <Alert type="warning" className="mt-20">
            Hubo un error al cargar los datos.
            <Link to="/general" className="btn mt-2 w-full uppercase">
              Volver a inicio
            </Link>
          </Alert>
        )}
        {isLoading && (
          <div className="flex justify-center">
            <p className="mt-6 animate-pulse">Cargando...</p>
          </div>
        )}
        {isSuccess && (
          <div className="mb-20">
            {data.map((person: Person) => (
              <PersonOption
                setSelectedPerson={setSelectedPerson}
                person={person}
                key={person.id}
              />
            ))}
          </div>
        )}
        <div className="fixed bottom-0 left-0 w-full px-6 pb-6 pt-4 md:px-16 lg:px-96">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <button
            disabled={!selectedPerson}
            className="btn btn-primary relative z-10 w-full uppercase text-white"
            type="submit"
          >
            Continuar
          </button>
        </div>
      </form>
      <ConfirmModal
        opened={modalOpened}
        setModalOpened={setModalOpened}
        {...(modalData as { king: string; queen: string })}
      />
    </section>
  );
};
export default ListVoteView;

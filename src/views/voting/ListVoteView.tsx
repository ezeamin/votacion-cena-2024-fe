import { useState } from 'react';

import PersonOption from '@/components/voting/PersonOption';

import { fetchPeople } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

import { Person } from '@/types';

type Props = {
  type: 'king' | 'queen';
};

const ListVoteView = (props: Props) => {
  const { type } = props;

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: [`${type}-people`],
    queryFn: () => fetchPeople({ type }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(selectedPerson);
  };

  return (
    <section>
      <div className="fixed left-0 top-0 w-full px-6 pb-4 pt-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-gray-900 via-gray-900/75 to-transparent"></div>
        <h1 className="z-21 relative text-center text-[1.6rem]">
          Votación para {type === 'king' ? 'Rey 🤴🏼' : 'Reina 👸🏼'}
        </h1>
      </div>
      <form className="mt-14" onSubmit={handleSubmit}>
        {isError && <p>Hubo un error al cargar los datos.</p>}
        {isLoading && <p>Cargando...</p>}
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
        <div className="fixed bottom-0 left-0 w-full px-6 pb-6 pt-4">
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
    </section>
  );
};
export default ListVoteView;

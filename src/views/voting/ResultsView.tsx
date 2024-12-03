import { useMemo, useState } from 'react';

import Grid from '@/components/grid/Grid';
import Chayanne from '@/components/results/Chayanne';
import Confetti from '@/components/results/Confetti';
import ResultList from '@/components/results/ResultList';
import VotingCount from '@/components/results/VotingCount';
import Timer from '@/components/voting/Timer';

import { PersonWithVotes } from '@/types';

const items: PersonWithVotes[] = [
  { id: '1', name: 'Ezequiel Amin', votes: 10 },
  { id: '2', name: 'Juan Perez', votes: 10 },
  { id: '3', name: 'Pedro Gomez', votes: 10 },
  { id: '4', name: 'Maria Rodriguez', votes: 10 },
  { id: '5', name: 'Ana Fernandez', votes: 10 },
  { id: '6', name: 'Carlos Gonzalez', votes: 8 },
  { id: '7', name: 'Jose Lopez', votes: 10 },
  { id: '8', name: 'Lucia Martinez', votes: 10 },
  { id: '9', name: 'Fernando Sanchez', votes: 10 },
  { id: '10', name: 'Sofia Ramirez', votes: 10 },
];

const ResultsView = () => {
  const [data, setData] = useState<PersonWithVotes[]>(items);

  // Function to reorder items
  const reorderItems = () => {
    setData((prevItems) =>
      [...prevItems]
        .sort(() => Math.random() - 0.5)
        .map((item) => ({
          ...item,
          votes: Math.round(Math.random() * 10),
        }))
    );
  };

  const totalVotes = useMemo(
    () => data.reduce((acc, item) => acc + item.votes, 0),
    [data]
  );

  return (
    <section className="flex flex-col justify-center md:min-h-[calc(100vh_-_40px)]">
      <h1 className="mb-5 mt-3 text-center text-3xl font-bold md:mb-10">
        Resultados
      </h1>
      <Grid container className="mb-10 md:mb-24" gap={2}>
        <Grid item xs={6}>
          <Timer />
        </Grid>
        <Grid item xs={6}>
          <VotingCount totalVotes={totalVotes} />
        </Grid>
      </Grid>
      <Grid container gap={4}>
        <Grid item md={6} xs={12}>
          <ResultList type="king" data={data} />
        </Grid>
        <Grid item md={6} xs={12}>
          <ResultList
            className="mt-10 md:mt-0"
            type="queen"
            data={[...data].sort(() => Math.random() - 0.5)}
          />
        </Grid>
      </Grid>
      <button className="btn btn-primary mt-10 w-full" onClick={reorderItems}>
        Reorder
      </button>
      <Confetti />
      <Chayanne />
    </section>
  );
};
export default ResultsView;

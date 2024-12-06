import { useEffect, useMemo, useState } from 'react';

import Alert from '@/components/alert/Alert';
import Grid from '@/components/grid/Grid';
import Chayanne from '@/components/results/Chayanne';
import Confetti from '@/components/results/Confetti';
import ResultList from '@/components/results/ResultList';
import VotingCount from '@/components/results/VotingCount';
import Timer from '@/components/voting/Timer';

import { useSocket } from '@/stores/useSocket';

import { PersonWithVotes } from '@/types';

const ResultsView = () => {
  const [kings, setKings] = useState<PersonWithVotes[]>([]);
  const [queens, setQueens] = useState<PersonWithVotes[]>([]);

  const { onSocket, emitSocket } = useSocket();

  const totalVotes = useMemo(
    () =>
      kings.reduce((acc, item) => acc + item.votes, 0) +
      queens.reduce((acc, item) => acc + item.votes, 0),
    [kings, queens]
  );

  useEffect(() => {
    emitSocket('getVotes', {});

    onSocket('updateVotes', (apiData: unknown) => {
      const data = apiData as PersonWithVotes[];

      const kings = data
        .filter((item) => item.type === 'king')
        .sort((a, b) => b.votes - a.votes);
      const queens = data
        .filter((item) => item.type === 'queen')
        .sort((a, b) => b.votes - a.votes);

      setKings(kings);
      setQueens(queens);
    });
  }, [onSocket, emitSocket]);

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
      {kings.length === 0 && queens.length === 0 ? (
        <Alert>No se registraron votos aún 👀</Alert>
      ) : (
        <Grid container gap={4}>
          <Grid item md={6} xs={12}>
            <ResultList type="king" data={kings} />
          </Grid>
          <Grid item md={6} xs={12}>
            <ResultList className="mt-10 md:mt-0" type="queen" data={queens} />
          </Grid>
        </Grid>
      )}
      <Confetti />
      <Chayanne />
    </section>
  );
};
export default ResultsView;

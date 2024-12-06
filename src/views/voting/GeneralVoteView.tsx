import { useEffect, useState } from 'react';

import StartVotingButton from '@/components/general/StartVotingButton';

import { hasVoted } from '@/api/api';
import { useSocket } from '@/stores/useSocket';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

const GeneralVoteView = () => {
  const [connected, setConnected] = useState(0);
  const [votingEnabled, setVotingEnabled] = useState(false);
  const { onSocket, emitSocket } = useSocket();

  const [searchParams] = useSearchParams();

  const [isDupped, setIsDupped] = useState<boolean>(
    !!searchParams.get('dupped')
  );

  const { data: hasVotedData, isLoading: isLoadingHasVoted } = useQuery({
    queryKey: ['hasVoted'],
    queryFn: hasVoted,
  });

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

  useEffect(() => {
    if (isDupped) return;

    if (hasVotedData) {
      emitSocket('getUsers', {});
      setIsDupped(hasVotedData.hasVoted);
    }
  }, [hasVotedData, emitSocket, isDupped]);

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col items-center justify-center text-center">
      <h1 className="px-1 text-3xl font-bold">Votación Sistemas 2024</h1>
      <p className="mt-5">
        Conectados:{' '}
        <span className="countdown">
          <span style={{ '--value': connected } as object}></span>
        </span>
      </p>
      <StartVotingButton
        isLoadingHasVoted={isLoadingHasVoted}
        isDupped={isDupped}
        votingEnabled={votingEnabled}
      />
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

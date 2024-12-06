import { useEffect, useState } from 'react';

import ConnectedUsers from '@/components/admin/ConnectedUsers';
import Grid from '@/components/grid/Grid';
import Timer from '@/components/voting/Timer';

import { useLoading } from '@/stores/useLoading';
import { useSocket } from '@/stores/useSocket';

const AdminView = () => {
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [isVotingEnabled, setIsVotingEnabled] = useState(false);

  const { setIsLoading } = useLoading();
  const { onSocket, emitSocket } = useSocket();

  const handleEnableVoting = () => {
    setIsLoading(true);
    emitSocket('toggleVoting', { enabled: true });
  };

  const handleDisableVoting = () => {
    setIsLoading(true);
    emitSocket('toggleVoting', { enabled: false });
  };

  useEffect(() => {
    onSocket('updateUsers', (apiData: unknown) => {
      const data = apiData as {
        isVotingEnabled: boolean;
        connectedUsers: number;
      };

      setIsLoading(false);
      setIsVotingEnabled(data.isVotingEnabled);
      setConnectedUsers(data.connectedUsers);
    });
  }, [onSocket, setIsLoading]);

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col justify-center text-center">
      <Grid container className="mb-10 md:mb-24" gap={2}>
        <Grid item xs={6}>
          <Timer />
        </Grid>
        <Grid item xs={6}>
          <ConnectedUsers connectedUsers={connectedUsers} />
        </Grid>
      </Grid>
      <Grid container gap={2}>
        <Grid item xs={6}>
          <button
            disabled={isVotingEnabled}
            className="btn btn-primary w-full uppercase text-white"
            onClick={handleEnableVoting}
          >
            Habilitar votacion
          </button>
        </Grid>
        <Grid item xs={6}>
          <button
            disabled={!isVotingEnabled}
            className="btn btn-error w-full uppercase text-white"
            onClick={handleDisableVoting}
          >
            Terminar votacion
          </button>
        </Grid>
      </Grid>
    </section>
  );
};
export default AdminView;

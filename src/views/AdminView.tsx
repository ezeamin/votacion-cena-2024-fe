import ConnectedUsers from '@/components/admin/ConnectedUsers';
import Grid from '@/components/grid/Grid';
import Timer from '@/components/voting/Timer';

const AdminView = () => {
  // TODO: Get this from socket
  const isVotingEnabled = true;

  const handleEnableVoting = () => {};
  const handleDisableVoting = () => {};

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col justify-center text-center">
      <Grid container className="mb-10 md:mb-24" gap={2}>
        <Grid item xs={6}>
          <Timer />
        </Grid>
        <Grid item xs={6}>
          <ConnectedUsers />
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

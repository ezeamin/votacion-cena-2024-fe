import { TOTAL_PARTICIPANTS } from '@/constants';

const ConnectedUsers = () => {
  // TODO: Get this from socket
  const connected = 0;

  return (
    <div className="text-center">
      <p>Conectados</p>
      <p className="text-3xl md:text-5xl">
        <span className="countdown">
          <span style={{ '--value': connected } as object}></span>
        </span>
        /{TOTAL_PARTICIPANTS}
      </p>
    </div>
  );
};
export default ConnectedUsers;

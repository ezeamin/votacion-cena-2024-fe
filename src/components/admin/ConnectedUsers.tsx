import { TOTAL_PARTICIPANTS } from '@/constants';

type Props = {
  connectedUsers: number;
};

const ConnectedUsers = (props: Props) => {
  const { connectedUsers } = props;

  return (
    <div className="text-center">
      <p>Conectados</p>
      <p className="text-3xl md:text-5xl">
        <span className="countdown">
          <span style={{ '--value': connectedUsers } as object}></span>
        </span>
        /{TOTAL_PARTICIPANTS}
      </p>
    </div>
  );
};
export default ConnectedUsers;

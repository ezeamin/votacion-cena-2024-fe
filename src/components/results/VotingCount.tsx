import { TOTAL_PARTICIPANTS } from '@/constants';

type Props = {
  totalVotes: number;
};

const VotingCount = (props: Props) => {
  const { totalVotes } = props;

  return (
    <div className="text-center">
      <p>Votos emitidos</p>
      <p className="text-3xl md:text-5xl">
        <span className="countdown">
          <span style={{ '--value': totalVotes } as object}></span>
        </span>
        /{TOTAL_PARTICIPANTS}
      </p>
    </div>
  );
};
export default VotingCount;

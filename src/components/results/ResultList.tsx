import ResultItem from './ResultItem';

import { PersonWithVotes } from '@/types';

type Props = {
  type: 'king' | 'queen';
  data: PersonWithVotes[];
  className?: string;
};

const ResultList = (props: Props) => {
  const { type, data, className } = props;

  const tiededVotes = data.reduce<number[]>((acc, person, index, arr) => {
    if (index > 0 && person.votes === arr[0].votes) {
      acc.push(index);
    }
    return acc;
  }, []);

  return (
    <section className={className}>
      <h2 className="mb-4 text-center text-lg">
        {type === 'king' ? '🤴🏼 Rey 2024' : '👸🏼 Reina 2024'}
      </h2>
      <div className="w-full space-y-2">
        {data.slice(0, 5).map((item, index) => (
          <ResultItem
            tiededVotes={tiededVotes}
            key={item.id}
            item={item}
            index={index}
            type={type}
          />
        ))}
      </div>
    </section>
  );
};
export default ResultList;

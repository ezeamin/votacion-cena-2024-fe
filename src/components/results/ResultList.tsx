import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import { PersonWithVotes } from '@/types';

type Props = {
  type: 'king' | 'queen';
  data: PersonWithVotes[];
  className?: string;
};

const ResultList = (props: Props) => {
  const { type, data, className } = props;

  return (
    <section className={className}>
      <h2 className="mb-4 text-center text-lg">
        {type === 'king' ? '🤴🏼 Rey 2024' : '👸🏼 Reina 2024'}
      </h2>
      <div className="w-full space-y-2">
        {data.slice(0, 5).map((item, index) => (
          <motion.div
            key={item.id}
            layout
            className={cn(
              'w-full rounded-lg bg-white p-3 text-center text-gray-800 shadow',
              index === 0
                ? `animate-bounce ${type === 'king' ? 'bg-blue-200' : 'bg-pink-200'} font-bold`
                : ''
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {index === 0 ? '👑 ' : ''}
            {`${item.name} - ${item.votes}`}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ResultList;

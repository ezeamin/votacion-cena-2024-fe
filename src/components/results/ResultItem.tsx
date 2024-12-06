import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import { PersonWithVotes } from '@/types';

type Props = {
  tiededVotes: number[];
  item: PersonWithVotes;
  index: number;
  type: 'king' | 'queen';
};

const ResultItem = (props: Props) => {
  const { tiededVotes, item, index, type } = props;

  const highlight = tiededVotes.includes(index) || index === 0;

  return (
    <motion.div
      key={item.id}
      layout
      className={cn(
        'w-full rounded-lg bg-white p-3 text-center text-gray-800 shadow',
        highlight
          ? `animate-bounce ${type === 'king' ? 'bg-blue-200' : 'bg-pink-200'} font-bold`
          : ''
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {highlight ? '👑 ' : ''}
      {`${item.name} - ${item.votes}`}
    </motion.div>
  );
};
export default ResultItem;

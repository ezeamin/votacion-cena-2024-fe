import { fetchPeople } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

type Props = {
  kingId: string;
  queenId: string;
};

const useGetSelected = (props: Props) => {
  const { kingId, queenId } = props;

  const { data: kingList, isError: isErrorKing } = useQuery({
    queryKey: ['king-people'],
    queryFn: () => fetchPeople({ type: 'king' }),
    enabled: !kingId,
  });

  const { data: queenList, isError: isErrorQueen } = useQuery({
    queryKey: ['queen-people'],
    queryFn: () => fetchPeople({ type: 'queen' }),
    enabled: !queenId,
  });

  if (
    !kingList ||
    !queenList ||
    isErrorKing ||
    isErrorQueen ||
    !kingId ||
    !queenId
  ) {
    return { king: null, queen: null };
  }

  const king = kingList?.find(
    (person) => person.id.toString() === kingId.toString()
  );
  const queen = queenList?.find(
    (person) => person.id.toString() === queenId.toString()
  );

  return { king, queen };
};
export default useGetSelected;

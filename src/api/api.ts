import { Person } from '@/types';

const BACK_URL = import.meta.env.VITE_BACK_URL;

export const fetchPeople = async ({
  type,
}: {
  type: 'king' | 'queen';
}): Promise<Person[]> => {
  const response = await fetch(`${BACK_URL}/${type}`);

  return response.json();
};

export const postVote = async ({
  kingId,
  queenId,
}: {
  kingId: string;
  queenId: string;
}) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BACK_URL}/votes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ kingId, queenId, token }),
  });

  if (!response.ok) {
    let msg = response.statusText;
    if (response.status === 401) {
      msg = 'dupped';
    }

    throw new Error(msg);
  }
};

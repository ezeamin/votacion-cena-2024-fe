import { Person } from '@/types';

const BACK_URL = import.meta.env.VITE_BACK_URL;

export const fetchPeople = async ({
  type,
}: {
  type: 'king' | 'queen';
}): Promise<Person[]> => {
  const response = await fetch(
    `${BACK_URL}/votes/${type === 'king' ? 'kings' : 'queens'}`
  );

  return response.json();
};

export const hasVoted = async (): Promise<{ hasVoted: boolean }> => {
  const token = localStorage.getItem('token');

  if (!token) {
    return { hasVoted: false };
  }

  const response = await fetch(`${BACK_URL}/votes/hasVoted?token=${token}`);
  const data = await response.json();

  return data;
};

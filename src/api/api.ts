const BACK_URL = import.meta.env.VITE_BACK_URL;

export const fetchPeople = async ({ type }: { type: 'king' | 'queen' }) => {
  const response = await fetch(`${BACK_URL}/${type}`);

  return response.json();
};

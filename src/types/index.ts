export type AnyProp = Record<string, unknown>;

export type Person = {
  name: string;
  lastname: string;
  id: string;
};

export type PersonWithVotes = Person & {
  votes: number;
};

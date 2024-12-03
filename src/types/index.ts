export type AnyProp = Record<string, unknown>;

export type Person = {
  name: string;
  id: string;
};

export type PersonWithVotes = Person & {
  votes: number;
};

export interface Card {
  name: string;
  color: string;
  stars: number;
}

export type CardCallback = (card: Card) => undefined;
export type VotingCallback = (card: Card, vote: number) => undefined;

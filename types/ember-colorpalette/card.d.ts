export interface Card {
  name: string;
  color: string;
  stars: number;
}

export type CardCallback = (card: Card) => undefined;
export type VotingCallback = (cardIndex: number, vote: number) => undefined;

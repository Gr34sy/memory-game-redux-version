import { playerAmount } from "./settingsTypes";

export type activePlayer = playerAmount;

export type activeFields = [number | "none", number | "none"];

export type gamefield = {
  name: string;
  isDiscovered: boolean;
};

export type game = {
  isRunning: boolean;
  activePlayer: activePlayer;
  moveCount?: number;
  startTime?: Date;
  activeFields: activeFields;
  board: gamefield[];
};

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
  activeFields: activeFields;
  board: gamefield[];
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  gamefield,
  game,
  gamefieldStatus,
  player,
  activePlayer,
} from "../../types/gameTypes";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isRunning: false,
    turn: {
      player: 0,
      firstActiveField: null,
      secondActiveField: null,
    },
    players: [],
    board: [],
    pairsLeft: 0,
  } as game,

  reducers: {
    // isRunning
    setRunning: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    },

    // turn
    passTurn: (state) => {
      if (state.turn.player === 3) {
        state.turn.player = 0;
        state.turn.firstActiveField = null;
        state.turn.secondActiveField = null;
      } else {
        state.turn.player++;
        state.turn.firstActiveField = null;
        state.turn.secondActiveField = null;
      }
    },
    setFirstActiveField: (state, action: PayloadAction<number | null>) => {
      state.turn.firstActiveField = action.payload;
    },
    setSecondActiveField: (state, action: PayloadAction<number | null>) => {
      state.turn.secondActiveField = action.payload;
    },

    // players
    setPlayers: (state, action: PayloadAction<player[]>) => {
      state.players = action.payload;
    },
    incrementPlayerPairs: (state, action: PayloadAction<activePlayer>) => {
      state.players[action.payload].pairs++;
    },

    // gameboard and fields
    setGameboard: (state, action: PayloadAction<gamefield[]>) => {
      state.board = action.payload;
    },
    setFieldStatus: (
      state,
      action: PayloadAction<{ fieldId: number; status: gamefieldStatus }>
    ) => {
      state.board[action.payload.fieldId].status = action.payload.status;
    },

    // pairs left
    decrementPairsLeft: (state) => {
      state.pairsLeft--;
    },
  },
});

export const {
  setRunning,
  passTurn,
  setFirstActiveField,
  setSecondActiveField,
  setPlayers,
  incrementPlayerPairs,
  setGameboard,
  setFieldStatus,
  decrementPairsLeft,
} = gameSlice.actions;
export default gameSlice.reducer;

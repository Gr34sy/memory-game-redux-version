import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gamefield, activePlayer, game } from "../../types/gameTypes";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isRunning: false,
    activePlayer: 0 as activePlayer,
    activeFields: ["none", "none"],
    board: [],
  } as game,

  reducers: {
    setRunning: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    },

    setActivePlayer: (state, action: PayloadAction<activePlayer>) => {
      state.activePlayer = action.payload;
    },

    setActiveField: (
      state,
      action: PayloadAction<{ activeId: 0 | 1; fieldId: number }>
    ) => {
      state.activeFields[action.payload.activeId] = action.payload.fieldId;
    },

    setGameboard: (state, action: PayloadAction<gamefield[]>) => {
      state.board = action.payload;
    },

    setField: (
      state,
      action: PayloadAction<{ fieldId: number; gamefield: gamefield }>
    ) => {
      state.board[action.payload.fieldId] = action.payload.gamefield;
    },
  },
});

export const { setRunning } = gameSlice.actions;
export default gameSlice.reducer;

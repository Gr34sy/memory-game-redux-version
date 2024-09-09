import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { player } from "../../types/playerTypes";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    value: [
      {
        name: "Player 1",
        pairs: 0,
      },
    ],
  },
  reducers: {
    setPlayers: (state, action: PayloadAction<player[]>) => {
      state.value = action.payload;
    },
    incrementPlayerPairs: (state, action: PayloadAction<number>) => {
      if(state.value[action.payload]) {
        state.value[action.payload].pairs++;
      }
    },
  },
});

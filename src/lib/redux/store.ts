import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settingsSlice";
import game from "./slices/gameSlice";
import players from "./slices/playersSlice";

const store = configureStore({
  reducer: {
    settings,
    game,
    players,
  },
});

export type RootState = ReturnType<typeof store.getState>;
 
export default store;

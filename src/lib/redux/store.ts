import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settingsSlice";
import game from "./slices/gameSlice";

const store = configureStore({
  reducer: {
    settings,
    game,
  },
});

export type RootState = ReturnType<typeof store.getState>;
 
export default store;

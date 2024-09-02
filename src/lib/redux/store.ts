import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    settings
  },
});

export type RootState = ReturnType<typeof store.getState>;
 
export default store;

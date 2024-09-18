import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import settings from "./slices/settingsSlice";
import game from "./slices/gameSlice";

const listenerMiddleware = createListenerMiddleware();

const store = configureStore({
  reducer: {
    settings,
    game,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

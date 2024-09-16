import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import settings from "./slices/settingsSlice";
import game from "./slices/gameSlice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

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

// const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// const useAppSelector = useSelector.withTypes<RootState>();

// listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
//   predicate: (_action, currentState, previousState) => {
//     return currentState.game.turn !== previousState.game.turn;
//   },
//   effect: async (_action) => {

//   }
// });

export default store;

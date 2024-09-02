import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        isRunning: false 
    },
    reducers: {
        setRunning: (state, action: PayloadAction<boolean>) => {
            state.isRunning = action.payload;
        } 
    },
})

export const { setRunning } = gameSlice.actions;
export default gameSlice.reducer;
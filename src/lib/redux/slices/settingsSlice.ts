import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { settings } from "../../settingsTypes";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
      value: {
        players: {
            amount: 1,
            names:
            {
                p1: ""
            }
        },
        theme: "random",
        board: "g4"
      }  as settings,
    },
    reducers: {
        setSettings: (state, action: PayloadAction<settings>) => {
            state.value = action.payload;
        }
    },
})

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
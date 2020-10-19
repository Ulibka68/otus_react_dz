import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lifeStateSlice } from "@/modules/Life";

const ColorMaps = [
  "lightGray",
  "YellowGreen",
  "Aqua",
  "CadetBlue",
  "Chocolate",
  "DarkTurquoise",
  "LawnGreen",
];

export const cInitialState = {
  backgroundColor: "lightGray",
  curColorIndex: 0,
  colorMaps: ColorMaps,
};

export const chanelWindowSlice = createSlice({
  name: "cnahelWindow",
  initialState: cInitialState,
  reducers: {
    initState(state, action: PayloadAction<void>) {
      state = cInitialState;
    },
    changeBgColor(state, action: PayloadAction<string>) {
      state.backgroundColor = action.payload;
    },
    nextColor(state, action: PayloadAction<void>) {
      if (++state.curColorIndex >= state.colorMaps.length)
        state.curColorIndex = 0;
      state.backgroundColor = state.colorMaps[state.curColorIndex];
    },
  },
});

// export const { reducer, actions } = lifeStateSlice;
export const { reducer } = chanelWindowSlice;
export const {
  initState,
  changeBgColor,
  nextColor,
} = chanelWindowSlice.actions;

export const cnahelWindow_STOP_SAGA = createAction<void>(
  "cnahelWindow/STOP_SAGA"
);
export const cnahelWindow_START_SAGA = createAction<void>(
  "cnahelWindow/START_SAGA"
);

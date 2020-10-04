import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

interface lifeStateType {
  state: number[][];
  neighbors: number[][];
  sizex: number;
  sizey: number;
}

const defaultlifeState: lifeStateType = {
  state: [],
  neighbors: [],
  sizex: 0,
  sizey: 0,
};

export const nextMove = createSlice<
  lifeStateType,
  SliceCaseReducers<lifeStateType>
>({
  name: "lifeState",
  initialState: defaultlifeState,
  reducers: {
    initState(
      state,
      action: PayloadAction<{
        sizex: number;
        sizey: number;
      }>
    ) {
      return {
        state: Array.from(Array(action.payload.sizey), () =>
          new Array(action.payload.sizex).fill(0)
        ),
        neighbors: Array.from(Array(action.payload.sizey), () =>
          new Array(action.payload.sizex).fill(0)
        ),
        sizex: action.payload.sizex,
        sizey: action.payload.sizey,
      };
    },
  },
});

import { combineReducers } from "redux";
import { nextMove } from "@/redux/reducer/nextmove";
import { swapiPeopleSlice } from "@/futures/swapi/swapiReducer";

export const reducer = combineReducers({
  move: nextMove.reducer,
  swapi: swapiPeopleSlice.reducer,
});

export type RootStateType = ReturnType<typeof reducer>;

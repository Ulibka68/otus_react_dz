import { combineReducers } from "redux";
import { nameReducer } from "@/redux/reducer/name";
import { nextMove } from "@/redux/reducer/nextmove";
// import {swapiPeopleSlice} from "@/futures/swapi/swapi";
import {swapiPeopleSlice} from "@/futures/swapi/swapiReducer";

export const reducer = combineReducers({
  name: nameReducer,
  move: nextMove.reducer,
  swapi : swapiPeopleSlice.reducer
});

export type RootStateType = ReturnType<typeof reducer>;

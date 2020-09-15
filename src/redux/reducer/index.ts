import { combineReducers } from "redux";
import { nameReducer } from "@/redux/reducer/name";
import { nextMove } from "@/redux/reducer/nextmove";

export const reducer = combineReducers({
  name: nameReducer,
  move: nextMove.reducer
});

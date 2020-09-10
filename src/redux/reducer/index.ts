import { combineReducers } from "redux";
import { nameReducer } from "@/redux/reducer/name";

export const reducer = combineReducers({
  name: nameReducer,
});

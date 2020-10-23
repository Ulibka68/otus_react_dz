import { reducer } from "./chanelsWindowReducer";
import { GlobalWindowClickSaga } from "./chanelsWindowSaga";
import {
  cnahelWindow_STOP_SAGA,
  cnahelWindow_START_SAGA,
  initState,
} from "@/modules/ChanelWindow/chanelsWindowReducer";

import { Dispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { ISagaModule } from "redux-dynamic-modules-saga";

type TchanelWindowState = ReturnType<typeof reducer>;
type getStateType = () => TchanelWindowState;

function cancelWindowSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    dispatch(cnahelWindow_STOP_SAGA());
  };
}

// return (dispatch: thunk.ThunkDispatch<any, any, any>, getState: any) => {
function startWindowSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    // console.warn("startWindowSaga : ", getState());
    dispatch(cnahelWindow_START_SAGA());
  };
}

// any - тип локального state
export function getCahnelsWindowModule(): ISagaModule<typeof reducer> {
  return {
    // Unique id of the module
    id: "chanelsWindow",
    // Maps the Store key to the reducer
    reducerMap: {
      chanelWindowState: reducer,
    },
    // если Saga с параметром - то пишется так:
    // { saga: usersSagaWithArguments, argument: { a: "argument" } },
    sagas: [GlobalWindowClickSaga],
    // Optional: Any actions to dispatch when the module is loaded
    initialActions: [(startWindowSaga() as unknown) as AnyAction],
    // Optional: Any actions to dispatch when the module is unloaded
    finalActions: [(cancelWindowSaga() as unknown) as AnyAction],
    // retained: true,
  };
}

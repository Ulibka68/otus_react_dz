import { reducer } from "./chanelsWindowReducer";
import { GlobalWindowClickSaga } from "./chanelsWindowSaga";
import {
  cnahelWindow_STOP_SAGA,
  cnahelWindow_START_SAGA,
  InitWindowState,
} from "@/modules/ChanelWindow/chanelsWindowReducer";

import { put } from "redux-saga/effects";
import * as wind from "@/modules/ChanelWindow/chanelsWindowReducer";
import { Action, Middleware, ReducersMapObject } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";

type TchanelWindowState = ReturnType<typeof reducer>;
type getStateType = () => TchanelWindowState;

function cancelWindowSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    dispatch(cnahelWindow_STOP_SAGA());
  };
}

interface AnyAction<StateType> extends Action<any> {
  (dispatch: Dispatch, getState: () => StateType): any;
}

/**
 * Represents a module which is set of reducers, sagas, initial actions and final actions
 */
interface IModule<State> {
  /**
   * Id of the module
   */
  id: string;

  /**
   * Reducers for the module
   */
  reducerMap?: ReducersMapObject<State, AnyAction<State>>;

  /**
   * Middlewares to add to the store
   */
  middlewares?: Middleware[];

  /**
   * These actions are dispatched immediately after adding the module in the store
   */
  initialActions?: AnyAction<State>[];

  /**
   * These actions are dispatched immediatly before removing the module from the store
   */
  finalActions?: AnyAction<State>[];

  /**
   * Specifies if the module is retained forever in the store
   */
  retained?: boolean;
}

interface ISagaWithArguments<T> {
  saga: (argument?: T) => Iterator<any>;
  argument?: T;
}
declare type ISagaRegistration<T> =
  | (() => Iterator<any>)
  | ISagaWithArguments<T>;
interface ISagaModule<T> extends IModule<T> {
  sagas?: ISagaRegistration<any>[];
}

// return (dispatch: thunk.ThunkDispatch<any, any, any>, getState: any) => {
function startWindowSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    dispatch(InitWindowState());
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

    initialActions: [startWindowSaga()],
    // Optional: Any actions to dispatch when the module is unloaded
    finalActions: [cancelWindowSaga()],
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

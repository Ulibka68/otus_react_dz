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

function cancelWindowSaga() {
  return (dispatch: any, getState: any) => {
    dispatch(cnahelWindow_STOP_SAGA());
  };
}
/*
 * S - state
 * E - extraArgument
 * R - возвращаемый тип
 * A - A extends Action
 * */
type AnyAction<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

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
  reducerMap?: ReducersMapObject<State, AnyAction<any, any, any, Action<any>>>;

  /**
   * Middlewares to add to the store
   */
  middlewares?: Middleware[];

  /**
   * These actions are dispatched immediately after adding the module in the store
   */
  initialActions?: AnyAction[];

  /**
   * These actions are dispatched immediatly before removing the module from the store
   */
  finalActions?: AnyAction[];

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
  return (dispatch: any, getState: any) => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    finalActions: [cancelWindowSaga()],
  };
}

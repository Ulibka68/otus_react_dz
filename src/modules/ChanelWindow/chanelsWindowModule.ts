import { reducer } from "./chanelsWindowReducer";
import { GlobalWindowClickSaga } from "./chanelsWindowSaga";
import {
  cnahelWindow_STOP_SAGA,
  cnahelWindow_START_SAGA,
} from "@/modules/ChanelWindow/chanelsWindowReducer";

import { LifeGameRootState } from "@/redux/store";
import { Action, ReducersMapObject, Middleware } from "redux";
import { ThunkAction } from "redux-thunk";

/* ******************************************* */

type TchanelWindowState = ReturnType<typeof reducer>;
type getStateType = () => TchanelWindowState;

type initial_final_action = ThunkAction<
  void,
  LifeGameRootState,
  unknown,
  Action<string>
>;

type AnyAction = initial_final_action;

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
  reducerMap?: ReducersMapObject<State, Action<any>>;
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

export interface ISagaWithArguments<T> {
  saga: (argument?: T) => Iterator<any>;
  argument?: T;
}

declare type ISagaRegistration<T> =
  | (() => Iterator<any>)
  | ISagaWithArguments<T>;

interface ISagaModule<T> extends IModule<T> {
  sagas?: ISagaRegistration<any>[];
}

function cancelWindowSaga(): initial_final_action {
  return (dispatch, getState) => {
    dispatch(cnahelWindow_STOP_SAGA());
  };
}

function startWindowSaga(): initial_final_action {
  return (dispatch, getState) => {
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
    // finalActions: [cancelWindowSaga()],
    finalActions: [cancelWindowSaga()],
  };
}

import {
  reducer,
  initState,
  randomSeed,
  startTimer,
  stopTimer,
  caclNeighbors,
  life_START_SAGA,
  life_STOP_SAGA,
} from "./lifeReducer";
// import * as lifeReducer from "./lifeReducer";
import * as lifeSaga from "./life_saga";

import { Dispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { ISagaModule } from "redux-dynamic-modules-saga";

type TlifeState = ReturnType<typeof reducer>;
type getStateType = () => TlifeState;

function cancelLifeSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    dispatch(life_STOP_SAGA());
  };
}

// return (dispatch: thunk.ThunkDispatch<any, any, any>, getState: any) => {
function startLifeSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    /* Провести начальную инициализацию жизни  */
    dispatch(initState({ sizex: 10, sizey: 10 }));
    dispatch(randomSeed({ seedPercent: 0.3 }));
    dispatch(caclNeighbors(null));

    dispatch(life_START_SAGA());
  };
}

// any - тип локального state
export function getLifeModule(): ISagaModule<typeof reducer> {
  return {
    // Unique id of the module
    id: "life",
    // Maps the Store key to the reducer
    reducerMap: {
      lifeState: reducer,
    },
    // если Saga с параметром - то пишется так:
    // { saga: usersSagaWithArguments, argument: { a: "argument" } },
    sagas: [lifeSaga.lifeSaga],
    // Optional: Any actions to dispatch when the module is loaded
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initialActions: [startLifeSaga()],
    // Optional: Any actions to dispatch when the module is unloaded
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    finalActions: [cancelLifeSaga()],
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

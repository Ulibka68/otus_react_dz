import {
  reducer,
  initState,
  randomSeed,
  startTimer,
  stopTimer,
  caclNeighbors,
} from "./lifeReducer";
// import * as lifeReducer from "./lifeReducer";
import * as lifeSaga from "./life_saga";

import { Dispatch } from "@reduxjs/toolkit";
import { ISagaModule } from "redux-dynamic-modules-saga";

type TlifeState = ReturnType<typeof reducer>;
type getStateType = () => TlifeState;

function cancelLifeSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    // нужно остановить таймер если он запущен
    dispatch(stopTimer());
  };
}

// return (dispatch: thunk.ThunkDispatch<any, any, any>, getState: any) => {
function startLifeSaga() {
  return (dispatch: Dispatch, getState: getStateType) => {
    /* Провести начальную инициализацию жизни  */
    dispatch(initState({ sizex: 10, sizey: 10 }));
    dispatch(randomSeed({ seedPercent: 0.3 }));
    dispatch(caclNeighbors(null));
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
    sagas: [lifeSaga.initSaga],
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

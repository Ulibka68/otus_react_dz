import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { lifeSaga, lifeStateSlice } from "@/modules/Life";
import { timerChannelsSaga } from "@/modules/Life/life_saga";
import { chanelWindowSlice } from "@/modules/ChanelWindow/chanel_window_reducer";
import { GlobalWindowClickSaga } from "@/modules/ChanelWindow/chanelsWindowSaga";
import * as life_reducer from "@/modules/Life/state_logic_reducer";
import { take } from "redux-saga-test-plan/matchers";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(lifeSaga);
  // yield fork(GlobalWindowClickSaga);

  while (true) {
    const event = yield take(life_reducer.startTimer.type);
    yield fork(timerChannelsSaga);
  }
}

const reducer = combineReducers({
  lifeState: lifeStateSlice.reducer,
  chanelWindowState: chanelWindowSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type LifeGameRootState = ReturnType<typeof reducer>;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { lifeSaga, lifeStateSlice } from "@/modules/Life";
import { chanelWindowSlice } from "@/modules/ChanelWindow/chanel_window_reducer";
import { GlobalWindowClickSaga } from "@/modules/ChanelWindow/chanelsWindowSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(lifeSaga);
  yield fork(GlobalWindowClickSaga);
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

/*
export const store = configureStore({
  reducer,
});

 */

export type LifeGameRootState = ReturnType<typeof reducer>;

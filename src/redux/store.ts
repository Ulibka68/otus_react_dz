import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { lifeSaga, lifeStateSlice } from "@/modules/Life";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(lifeSaga);
}

const reducer = combineReducers({
  lifeState: lifeStateSlice.reducer,
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

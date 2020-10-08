import { takeEvery, call, put, fork } from "redux-saga/effects";
import { nextState } from "./state_logic_reducer";

function* tesSagaJob() {
  console.error("Hello Sagas!");
  yield takeEvery("LIFE_NEXT_STATE_ASYNC", nextLifeStateAsync);
}

export function* lifeSaga() {
  yield fork(tesSagaJob);
}

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

// обновить состояние с задержкой 1 сек
export function* nextLifeStateAsync() {
  yield call(delay, 1000);
  yield put(nextState(null));
}

async function* handleRequest() {
  const ps = yield await fetch("URL api");
}

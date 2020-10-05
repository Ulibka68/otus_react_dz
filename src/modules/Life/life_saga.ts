import { takeEvery, call, put, fork } from "redux-saga/effects";

function* tesSagaJob() {
  console.log("Hello Sagas!");
}

export function* lifeSaga() {
  yield fork(tesSagaJob);
}

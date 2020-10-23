import { takeEvery, call, put, fork, race, take } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";

import { nextState, stopTimer, startTimer } from "./lifeReducer";
import { Channel } from "@redux-saga/types";

let chanel: Channel<any> | null = null;

function timerChannels(sec: number) {
  return eventChannel((emitter) => {
    let cnt = 0;
    const timerId = setInterval(() => {
      console.log("timer : ", ++cnt);
      emitter(cnt);
    }, sec * 500);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(timerId);
    };
  });
}

export function* timerChannelsSaga() {
  if (chanel) return; // saga уже запущена и работает
  chanel = yield call(timerChannels, 2);

  while (true) {
    const event = yield take(chanel!);
    console.log("timerChannelsSaga event :", event);
    yield put(nextState(null));
  }
}

function* closeTimerChannelsSaga() {
  if (chanel) {
    chanel.close();
    chanel = null;
  }
}

export function* initSaga() {
  yield takeEvery(startTimer.type, timerChannelsSaga);
  yield takeEvery(stopTimer.type, closeTimerChannelsSaga);
}

import { eventChannel, END } from "redux-saga";
import { take, put, call, takeEvery, fork } from "redux-saga/effects";
import * as wind from "@/modules/ChanelWindow/chanelsWindowReducer";
import { EventChannel, TakeableChannel } from "@redux-saga/core";
import { Channel } from "@redux-saga/types";

function windowsEvent(eventName: string) {
  return eventChannel((emitter) => {
    window.addEventListener(eventName, emitter);
    // The subscriber must return an unsubscribe function
    return () => {
      window.removeEventListener(eventName, emitter);
    };
  });
}

export function* GlobalWindowClickSaga() {
  // тип сообщения - Dom event
  let chanel: Channel<any> | null = null;

  function* startSaga() {
    if (!chanel) {
      chanel = yield call(windowsEvent, "click");
      yield fork(chanelWork);
    }
  }

  function* stopSaga() {
    if (chanel) {
      yield chanel.close();
    }
  }

  function* chanelWork() {
    while (true) {
      const event = yield take(chanel!);
      yield put(wind.nextColor());
    }
  }

  yield takeEvery(wind.cnahelWindow_START_SAGA.type, startSaga);
  yield takeEvery(wind.cnahelWindow_STOP_SAGA.type, stopSaga);
}

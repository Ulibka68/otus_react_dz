import {combineReducers} from "redux";

// createStore allows us to load/unload modules dynamically.
import { createStore as createStoreReduxDynModules, IExtension, IModule } from "redux-dynamic-modules";
// Saga extension allows us to use Saga middleware in the module store.
import { getSagaExtension } from "redux-dynamic-modules-saga";
// Thunk extension allows us to use Thunk middleware in the module store.
// import { getThunkExtension } from "redux-dynamic-modules-thunk";

// импорты из моих модулей
import { lifeStateSlice } from "@/modules/Life";
import { chanelWindowSlice } from "@/modules/ChanelWindow/chanelsWindowReducer";

/* постоянно действующая saga не нужна - так как на каждом экране запускается своя сага
function* rootSaga() {
  yield fork(lifeSaga);
  yield fork(GlobalWindowClickSaga);

  while (true) {
    const event = yield take(life_reducer.startTimer.type);
    yield fork(timerChannelsSaga);
  }
}

 */

const reducer = combineReducers({
  lifeState: lifeStateSlice.reducer,
  chanelWindowState: chanelWindowSlice.reducer,
});


export function getLoggingExtension(): IExtension {
  return {
    onModuleAdded: (module: IModule<any>) =>
        console.log(`Module ${module.id} added`),
    onModuleRemoved: (module: IModule<any>) =>
        console.log(`Module ${module.id} removed`),
  };
}

export type LifeGameRootState = ReturnType<typeof reducer>;

export const store = createStoreReduxDynModules<LifeGameRootState>({
  extensions: [getSagaExtension(),getLoggingExtension()],
});

/*
Можно добавитиь несколько неубиваемых саг (на примере курса)
export const store = createStore<TicTacToeGameState>(
    { extensions: [getSagaExtension({})] },
    getLoginModule(),
    getBackgroundModule()
);

 */


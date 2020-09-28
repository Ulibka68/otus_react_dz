import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStoreMock from "redux-mock-store";
import { mount } from "enzyme";
import { swapiPeopleSlice, fetchPeoples } from "./swapiReducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { sleep } from "@/utils/sleep";

describe("ReduxData with mocked store", () => {
  // const middlewares = [thunk]; // add your middlewares like `redux-thunk`

  /*  Create Mock Store returns a function that will create a mock store from a state
   * with the same set of set of middleware applied. */
  // const mockStoreCreator = configureStoreMock(middlewares);
  // const mockStore = mockStoreCreator({});
  // mockStore.dispatch(fetchPeoples(1));
  /*    Error: Argument of type 'AsyncThunkAction<MyData, number, { dispatch: any; state: CombinedState<{ move: nextMoveState; swapi: initialStateType; }>; rejectValue: MyKnownError; }>'
    is not assignable to parameter of type 'AnyAction'.
        Property 'type' is missing in type 'AsyncThunkAction<MyData, number, { dispatch: any; state: CombinedState<{ move: nextMoveState; swapi: initialStateType; }>; rejectValue: MyKnownError; }>' but required in type 'AnyAction'.

 */

  const reducer = swapiPeopleSlice.reducer;
  const store = configureStore({
    reducer,
  });
  store.dispatch(fetchPeoples(1));

  it("задержка и вывод", async () => {
    await sleep(1500);
    console.log(store.getState());
    expect(store.getState()).toMatchInlineSnapshot();
  });
});

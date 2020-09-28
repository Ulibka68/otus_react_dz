import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStoreMock from "redux-mock-store";
import { mount } from "enzyme";
import { swapiPeopleSlice, fetchPeoples } from "./swapiReducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { sleep } from "@/utils/sleep";

// The fetch API is not implemented in Node.
// import * as fetch from "node-fetch";

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
  window.fetch = require("node-fetch");

  const reducer = swapiPeopleSlice.reducer;
  const preloadedState = {
    swapi: { loading: "idle", error: "", peoples: [] },
  };
  const store = configureStore({
    reducer,
    preloadedState,
  });
  store.dispatch(fetchPeoples(1));

  it("задержка и вывод", async () => {
    // за 2 сек (с учетом задержки 1 сек) данные должны появиться
    await sleep(2000);
    // console.log(store.getState());

    const state1 = store.getState();
    expect(state1).toMatchInlineSnapshot(
      {
        error: "",
        loading: "fulfilled",
        peoples: expect.any(Array),
      },
      `
      Object {
        "error": "",
        "loading": "fulfilled",
        "peoples": Any<Array>,
        "swapi": Object {
          "error": "",
          "loading": "idle",
          "peoples": Array [],
        },
      }
    `
    );

    /*
    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "error": "",
        "loading": "fulfilled",
        "peoples": Array [
          Object {
            "birth_year": "19BBY",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "eye_color": "blue",
            "films": Array [
              "http://swapi.dev/api/films/1/",
              "http://swapi.dev/api/films/2/",
              "http://swapi.dev/api/films/3/",
              "http://swapi.dev/api/films/6/",
            ],
            "gender": "male",
            "hair_color": "blond",
            "height": "172",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "fair",
            "species": Array [],
            "starships": Array [
              "http://swapi.dev/api/starships/12/",
              "http://swapi.dev/api/starships/22/",
            ],
            "url": "http://swapi.dev/api/people/1/",
            "vehicles": Array [
              "http://swapi.dev/api/vehicles/14/",
              "http://swapi.dev/api/vehicles/30/",
            ],
          },
    `);

     */
  });
});

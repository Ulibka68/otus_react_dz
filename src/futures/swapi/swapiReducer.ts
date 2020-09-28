/*

Курс React, урок 17: Middlewares

Домашнее задание 1
src/lesson17/homework/asyncFlow.ts

Напишите async flow который сходит в https://swapi.dev/api/people и сохранит данные в стейте
Нужна обработка различных состояний запроса и тесты

+1 балл за async flow который сохранит данные в стейте
+1 балл за обработку состояний реквеста в пути и ошибок
+1 балл за тесты
+1 балл за разнение по разных файлам и объединение в duck

*/

// Action creators

// Thunks

// Reducer

import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { sleep } from "@/utils/sleep";
import { RootStateType } from "@/redux/reducer/index";

// в процессе запроса будем менять состояние
type loadingStateType =
  | "idle"
  | "pending"
  | "fulfilled"
  | "rejected"
  | "abortpending";

interface initialStateType {
  loading: loadingStateType;
  error: string; // если нет ошибки - то ''
  peoples: any[];
}

interface MyKnownError {
  errorMessage: string;
}

// тип того что возвращает createAsyncThunk
type MyData = any[]; // массив людей

// что надо передать в action creator - одно значение только
type payloadCreatorType = number; // будем условно считать что передавать будем номер page

/*
    createAsyncThunk автоматически сгенерирует следующие actions:

    pending:    'swapi/fetchPeoples/pending'
    fulfilled:  'swapi/fetchPeoples/fulfilled'
    rejected:   'swapi/fetchPeoples/rejected'
 */
// для использования запускай dispatch(fetchPeoples(1))

export const fetchPeoples = createAsyncThunk<
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  payloadCreatorType,
  // Types for ThunkAPI
  {
    dispatch: any;
    // state: initialStateType; - ошибочно задал тип - на вход поступает общий тип state
    state: RootStateType;
    rejectValue: MyKnownError;
  }
>("swapi/fetchPeoples", async (pageNumber, thunkApi) => {
  // такая проверка здесь не нужна
  // нужно либо поставить disabled на button
  // либо завести локальную переменную в которой отслеживать состояние
  // кстати во время запроса генерируется уникальный  thunkApi.requestId - который тоже можно проверять
  if (thunkApi.getState().swapi.loading === "abortpending") {
    return thunkApi.rejectWithValue({
      errorMessage: "Не завершена обработка предыдущего вызова",
    });
  }

  await sleep(2000);
  const response = await fetch(`http://swapi.dev/api/people/`, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  if (!response.ok) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue({ errorMessage: "Ответ сети был не ok." });
  }

  const data = await response.json();
  if (data.results) return data.results;
  // массив users
  else return [];
});

const initialSliceState: initialStateType = {
  loading: "idle",
  error: "",
  peoples: [],
};

// extraReducers здесь применен потому что не надо создавать Action Creators  - они уже созданы ранее createAsyncThunk

export const swapiPeopleSlice = createSlice<
  initialStateType,
  SliceCaseReducers<initialStateType>
>({
  name: "swapiPeople",
  initialState: initialSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeoples.fulfilled, (state, action) => {
      state.peoples = action.payload;
      state.error = "";
      // state.loading = "idle";
      state.loading = "fulfilled";
    }),
      builder.addCase(fetchPeoples.rejected, (state, action) => {
        state.peoples = [];
        state.loading = "rejected";
        state.error = "";
        console.log(action);

        if (action.payload) {
          if ("errorMessage" in action.payload!) {
            state.error = action.payload!.errorMessage;
          } else if (typeof action.payload === "string") {
            state.error = action.payload;
          }
        } else state.error = "Неизвестная ошибка";
      }),
      builder.addCase(fetchPeoples.pending, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "abortpending";
        } else {
          state.peoples = [];
          state.error = "";
          state.loading = "pending";
        }
      });
  },
});

// для использования запускай dispatch(fetchPeoples(1))
/*
export interface swapiPeopleType {
  name: string;
  height?: number;
  mass?: number;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string; // "http://swapi.dev/api/planets/1/"
  films: string[]; //    "http://swapi.dev/api/films/1/",
  species: [];
  vehicles: string[]; //    "http://swapi.dev/api/vehicles/14/",
  starships: string[];
  created?: string;
  edited?: string;
  url: string; // она же id "http://swapi.dev/api/people/1/"
}

 */

/*
async function fetchUser() {
  const response = await fetch(`http://swapi.dev/api/people/`, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  if (!response.ok) {
    // Return the known error for future handling
    throw new Error("проблема с сетью");
  }

  const data = await response.json();
  return data;
}
*/

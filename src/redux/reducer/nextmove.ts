/* eslint-disable prettier/prettier */
import {
  CaseReducer,
  createAction,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

type nextMoveState = "x" | "o";

const defaultStatenextMove: nextMoveState = "x";

type nextMoveSliceReducerOptionType = SliceCaseReducers<nextMoveState>;

// с помощью CaseReducer можно подготовить функцию для creaetSlice
const xMove: CaseReducer<nextMoveState, PayloadAction<nextMoveState>> = (
  state,
  action
) => "o";

const oMove: CaseReducer<nextMoveState, PayloadAction<nextMoveState>> = (
  state,
  action
) => "x";

const incrementBy = createAction("incrementBy");
// extraReducers
// лучше всего строить черз builder

// не используй типы - параметры
// должен использоваться inferd
export const nextMove = createSlice<
  nextMoveState,
  nextMoveSliceReducerOptionType
>({
  name: "nextMove",
  initialState: defaultStatenextMove,
  reducers: {
    oMove,
    xMove,
  },
  extraReducers: {
    incrementByReducer: (state, action) => {
      if (incrementBy.match(action)) {
        return "x";
      }
    },
  },
});

// console.log("nextMove.actions : ", nextMove.actions);
/*
  nextMove.actions : { oMove : function, xMove : function}
  oMove.type = "nextMove/oMove"
 */

type AppActions = typeof nextMove.actions; // { oMove : function, xMove : function}
// AppActions = CaseReducerActions<SliceCaseReducers<nextMoveState>>

type AppActionsType = AppActions[keyof AppActions]["type"];

type AppActionsType2 = keyof AppActions;
const z2: AppActionsType2 = "k";

let a: AppActionsType = "nextMove2";
a = "nextMove1";

/*
Типы actions от Василия
const a1 = createAction('a1');
const a2 = createAction('a2');
const b1 = createAction('b1');
const b2 = createAction('b2');
const appActions = {
  a1,a2, b1,b2
};
type AppActions = typeof appActions;
type AppActionsType = AppActions[keyof AppActions]['type'];
const x1:AppActionsType = 'a1';
const x2:AppActionsType = 'a3'; // fail
*/

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
/*
interface  TopNavState = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
}

 */

type TopNavState2 = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

const stringLitArray = <L extends string>(arr: L[]) => arr;
const fruit = stringLitArray(["apple", "banana", "grape"]); // тип массив string
// console.log(fruit);
export type Fruit = (typeof fruit)[number];
const a41 : Fruit = 'apple';

interface Dictionary<T> {
  [key: string]: T;
  [ind2 : number] : T;

}



const a45 : Record<string, number> = {ee : 25};
const a43 : Dictionary<boolean> = { a : true, 2 : false, sd : true};
const a44 : Dictionary<number> = { bb : 25, 2 : 44};

interface Bar {
  x: number;
  y: string; // ERROR: Property `y` must be of type number
}

let keys: keyof Dictionary<number>;
//     ^ = let keys: string | number
let value: Dictionary<number>["foo"];
//      ^ = let value: number
value =55;
value = 1;



type FieldState = {
  value: string
};

type FormState =
    { isValid: boolean }
    & { [fieldName: string]: FieldState | boolean};


const vv41 : FormState = { isValid : true,   elk : {value : 'aa'} };


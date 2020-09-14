import {createAction, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";

type nextMoveState = "x" | "o";

const defaultStatenextMove: nextMoveState = "x";


type nextMoveSliceReducerOptionType = SliceCaseReducers<nextMoveState>;

const incrementBy = createAction('incrementBy');
// extraReducers
// лучше всего строить черз builder

export const nextMove = createSlice<nextMoveState,nextMoveSliceReducerOptionType>({
    name: 'nextMove',
    initialState:defaultStatenextMove,
    reducers:{
        oMove(state,action) {
            return "x";
        },
        xMove(state,action) {
            return "o";
        },
    },
    extraReducers: {
        incrementByReducer: (state, action) => {
            if ( incrementBy.match(action) ) {
                return "x"
            }
        }
    }

    /*
    extraReducers: builder =>
    {
        builder.addCase(incrementBy,
                (state, action) => {return "x"}
                )
    }

     */
});


/*type AppActions = typeof appActions;
type AppActionsType = AppActions[keyof AppActions]['type'];
const x1:AppActionsType = 'a1';*/

console.log('nextMove.actions : ', nextMove.actions);
console.log(nextMove.actions.oMove.type);


type AppActions = typeof nextMove.actions;
type AppActionsType = AppActions[keyof AppActions]['type'];

const a : AppActionsType = 'nextMove';

/*
type GameFieldState = string[][];

const defaultState: GameFieldState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

export const gameField = createReducer<GameFieldState>(defaultState, {
    [actions.xMove.type]: (state, action) => {
        state[action.payload.y][action.payload.x] = "o";
        return state;
    },
    [actions.oMove.type]: (state, action) => {
        state[action.payload.y][action.payload.x] = "x";
        return state;
    },
});

 */
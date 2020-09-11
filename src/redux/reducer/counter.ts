import {
    ActionCreatorWithNonInferrablePayload, ActionCreatorWithOptionalPayload, ActionCreatorWithoutPayload,
    ActionCreatorWithPayload, ActionCreatorWithPreparedPayload,
    createAction,
    PayloadActionCreator,
    PrepareAction
} from "@reduxjs/toolkit";

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
// usage
// dispatch(increment());

// payload is a number
export const add_num = createAction<number>('ADD_NUM');
// usage
// dispatch(add_num(130));

export type Coordinates = { x: number; y: number };
export const oMove = createAction<Coordinates>("oMove");
const mv = oMove({x: 1, y: 1});


export declare function createAction4<PA extends PrepareAction<any>, T extends string = string>
(type: T, prepareAction: PA)
    : PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;

export const xMove = createAction("xMove", (payload: Coordinates) => ({
    payload,
    meta: {delay: 500},
}));

export const xMove2 = createAction("xMove2",
    (x: number, y: number) => {
        if (x < 0 || y < 0) {
            return ({
                payload: {x: 0, y: 0},
                error: {desc: 'Ошибка в x или y'}
            });
        } else return (
        {
            payload: {x, y},
            meta: {delay: 500},
            error: {descr: 'что тут должно быть?'}
        });
    });
const mv2 = xMove2(1, 2);

type ActionsTypesString = "xMove" | "oMove" | "kMove";
export const xMove3 = createAction<void,ActionsTypesString>("xMove");


/*
Заблудился в createAction

export declare function createAction<PA extends PrepareAction<any>, T extends string = string>
    (type: T, prepareAction: PA)
    : PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;

функция prepareAction принимает любое число аргументов и возвращает объект с полями:
   { payload: P;
    meta: any;
    error: any;}

поле payload - обязательное, остальные два поля не обязательны

Вопрос 1:
Для чего используется тип T ? - смотрел описания типов но так и не смог добраться до сути.
По умолчанию T = string и описывает action.type которые обычно является константой, например createAction("xMove"...)

Вопрос 2:
Для чего нужно поле error и как его использовать?
Я так понимаю - как вариант может быть проверка параметров:

export const xMove2 = createAction("xMove2",
    (x: number, y: number) => {
        if (x < 0 || y < 0) {
            return ({
                payload: {x: 0, y: 0},
                error: {desc: 'Ошибка в x или y'}
            });
        } else return (
        {
            payload: {x, y},
            meta: {delay: 500},
            error: {descr: 'что тут должно быть?'}
        });
    });
const mv2 = xMove2(-11, 2);
 */

/*
Пример от Василия:
 */

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
// const x2:AppActionsType = 'a3'; // fail

// и дальше я типы в редьюсерах описываю через AppActions[keyof AppActions] (ну для этого само собой свой тип выведен)



type counterActionType = typeof increment | typeof decrement;

function counter(state = 0, action: counterActionType) {
    switch (action.type) {
        case increment.type:
            return state + 1
        case decrement.type:
            return state - 1
        default:
            return state
    }
}
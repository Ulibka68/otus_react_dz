Курс OTUS по React 2020
23 Redux-saga advanced concept

Домашнее задание
Redux-saga advanced concept
Цель: Реализуем движок генерации поколений в приложении.
Сосредоточьте внимание на redux+saga. Не стоит делать огромный pull request в рамках задания.
Лучше сделать меньше с упором на качество. Например, переведите один компонент полностью на redux стейт.
- переводим стейт нашего приложения на redux + saga
- используем тесты, чтобы бороться к регрессией
- рефакторим тесты, повышаем их эффективность
- реализуем правила работы генерации поколений в игровом поле
- проверяем работоспособность всех элементов управления
Критерии оценки: + 2 балла за удаление стейта из react компонентов
+ 1 балл за добавление нового (новых) редюсеров и саг
+ 1 балл за работоспособное приложение
+ 1 балл за добавление / улучшение тестов 

************************
Добавляем список пакетов для saga
dev:
npm i -D redux-logger redux-mock-store redux-saga-test-plan

prod:
npm i -S redux-dynamic-modules redux-dynamic-modules-saga redux-saga

************************
https://redux-saga.js.org/

Первый запуск
1. import createSagaMiddleware from 'redux-saga'
2. const sagaMiddleware = createSagaMiddleware()
3. const store = createStore(reducer,applyMiddleware(sagaMiddleware)   )
4. sagaMiddleware.run(helloSaga)

************************
yeld fork results in a **Task Object.** We assign the returned object into a local constant task. Later if we take a LOGOUT action, we pass that task to the cancel Effect. If the task is still running, it'll be aborted.

finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
    }
************************
###### Описан внешний канал событий на таймере

https://redux-saga.js.org/docs/advanced/Channels.html

actionChannel  - буферизация событий
************************
ветка express ssr в repo

ajax-http

###### https://redux-observable.js.org/

************************
**Using Channels** <br>
actionChannel Effect
const requestChan = yield actionChannel('REQUEST')

Using the **eventChannel** factory to connect to external events<br>
eventChannel(subscribe, [buffer])
************************
Выписки из Emotion:

const grCont_div = css`
    background-color: beige;
    font-size: 10px;
    line-height: 8px;
    padding-left: 2px;
`;

 <div css={[danger, base]}>

<div
    css={[
      { color: 'darkorchid' },
      { backgroundColor: 'hotpink' },
      { padding: 8 }
    ]}
  >

 <div>
    <style>
      {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
      >
    </style>
    <p className="base danger">What color will this be?</p>
  </div>

  const Button = styled.button`  font-size: ${props => props.primary ? '2em' : '1em'};`
 */

[Каналы]: https://redux-saga.js.org/docs/advanced/Channels.html
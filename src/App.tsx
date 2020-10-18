import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { GameSpacePage } from "@/pages/gamespacePage";
import * as life from "@/modules/Life/lifeReducer";
import { ChanelsWindow } from "@/modules/ChanelWindow/chanelsWindow";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/gamespace">Поле для игры жизнь тестовое</Link>
          </li>
          <li>
            <Link to="/chanelsWindow">
              Window глобальный клик вне прямоугольника
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/gamespace">
          <GameSpacePage />
        </Route>
        <Route path="/chanelsWindow">
          <ChanelsWindow />
        </Route>

        <Route path="*">
          <div>
            <h1>Нажмите на меню чтобы запустить процесс</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

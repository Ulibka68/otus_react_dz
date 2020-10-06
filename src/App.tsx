import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { GameSpacePage } from "@/pages/gamespacePage";
import * as life from "@/modules/Life/state_logic_reducer";

/* Провести начальную инициализацию жизни  */
store.dispatch(life.initState({ sizex: 10, sizey: 10 }));
store.dispatch(life.randomSeed({ seedPercent: 0.3 }));
store.dispatch(life.caclNeighbors(null));

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/gamespace">Поле для игры тестовое</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/gamespace">
          <GameSpacePage />
        </Route>

        <Route path="*">
          <div>
            <h1>Путь по умолчанию2</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

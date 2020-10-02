import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import {GameSpacePage} from "@/pages/gamespacePage";
import {lifeState} from "@/redux/state_logic";

const sizex=15;
const sizey=15;

const ls = new lifeState(sizex,sizey);
ls.randomSeed(0.2);
ls.caclNeighbors();

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

          <GameSpacePage sizex={sizex} sizey={sizey} ls={ls} />
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

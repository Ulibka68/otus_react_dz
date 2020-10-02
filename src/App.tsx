import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Меню1</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="*">
          <div>
            <h1>Путь по умолчанию2</h1>

          </div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

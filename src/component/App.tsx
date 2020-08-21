import React from "react";
import FlickrContainer from "./FlickrContainer";
import Basic from "./FormParams";
import About from "./About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

// параметры определения пути
// https://github.com/pillarjs/path-to-regexp#parameters

class App extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/forms">Формы</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/forms">
            <div>
              <h1>Урок9 формы</h1>
            </div>
            {/*<FlickrContainer />*/}
            <Basic />
          </Route>
        </Switch>
      </Router>
    );
  }
}

// export default withRouter(App);
export default App;

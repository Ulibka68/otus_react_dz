import React from "react";
import "./App.css";
import EmTest from "./EmTest";

interface IState {
  messageLine: string;
}
// eslint-disable-next-line  @typescript-eslint/no-empty-interface
interface IProps {}

class App extends React.Component<IProps, IState> {
  constructor(props?: any) {
    super(props);

    this.state = {
      messageLine: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Урок 7 CSS in JS</h1>
        <EmTest />
      </div>
    );
  }
}

export default App;

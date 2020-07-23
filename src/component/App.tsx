import React, { FC } from "react";

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
        <h1>Урок 7 CSS in JS</h1>
    );
  }
}

export default App;

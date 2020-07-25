import React from "react";

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
    return <h1>Урок8 начало2</h1>;
  }
}

export default App;

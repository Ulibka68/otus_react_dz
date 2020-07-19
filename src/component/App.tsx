import React, { FC } from "react";
import CalcWrapper from "./CalcWrapper";
import { CalcInputString } from "../utilites/lexeme-parce";

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

  calcCallback = (op: string) => {
    //  вычислить выражение
    switch (op) {
      case "=": // вычислить выражение
        const clc = CalcInputString(this.state.messageLine);
        this.setState({ messageLine: clc.toString() });
        break;
      case "CLEAR":
        this.setState({ messageLine: "" });
        break;
      default:
        this.setState((state) => {
          return { messageLine: state.messageLine + op };
        });
    }
  };

  render() {
    return (
      <CalcWrapper
        callBack={this.calcCallback}
        messageline={this.state.messageLine}
      />
    );
  }
}

export default App;

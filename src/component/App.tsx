import React, { FC } from "react";
import CalcWrapper from "./CalcWrapper";

interface IState {
  messageLine : string;
}

interface IProps {
}


class App extends React.Component<IProps,IState>  {
  constructor(props : IProps) {
    super(props);
    this.state = {
      messageLine : "",
    };
  };

  calcCallback = (op : string) => {
    //  вычислить выражение
    switch (op) {
      case '=' : // вычислить выражение
        this.setState({messageLine : "="});
        break;
      case 'CLEAR' :
        this.setState({messageLine : ""});
        break;
      default :
        this.setState( (state) => { return {messageLine : state.messageLine + op} } );
    }
  };

  render() {

    return (
        <>
            <CalcWrapper callBack={this.calcCallback} messageline={this.state.messageLine}/>
        </>
    );
  }
}

export default App;

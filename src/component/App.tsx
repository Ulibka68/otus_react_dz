import React from "react";
import Flickr from "../utilities/Flickr";

interface IState {
  messageLine: string;
}
// eslint-disable-next-line  @typescript-eslint/no-empty-interface
interface IProps {}

export default class App extends React.Component<IProps, IState> {
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

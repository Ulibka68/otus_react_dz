import React from "react";
import Flickr from "../utilities/Flickr";

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

    const f = new Flickr("cats");
    // console.log(f.getPage(0));
    // f.scroll();
    f.generateSequenceTest();
  }

  render() {
    return <h1>Урок8 начало2</h1>;
  }
}

export default App;

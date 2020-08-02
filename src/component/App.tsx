import React from "react";
import FlickrContainer from "./FlickrContainer";
import Basic from "./FormParams";

export default class App extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Урок9 формы</h1>
        </div>
        {/*<FlickrContainer />*/}
        <Basic />
      </div>
    );
  }
}

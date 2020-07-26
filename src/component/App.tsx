import React from "react";
import FlickrContainer from "./FlickrContainer";

export default class App extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Урок8 начало</h1>
        </div>
        <FlickrContainer />
      </div>
    );
  }
}

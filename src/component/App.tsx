import React from "react";
import { getUserOrderStates } from "../homework/easy1";

export default class App extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);

    console.log(getUserOrderStates(["inWork", "buyingSupplies"]));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Урок5 </h1>
        </div>
      </div>
    );
  }
}

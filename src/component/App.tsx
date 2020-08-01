import React from "react";
import { RadioButton, TestRadioGroup } from "./RadioButtons";
import { Prims, ExecutionerTest } from "./PrimitiveComp";

export default class App extends React.Component<any, any> {
  constructor(props?: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Урок10 тренировка</h1>
          <ExecutionerTest />
          <Prims name2="Вася" />
        </div>
        <TestRadioGroup />
      </div>
    );
  }
}

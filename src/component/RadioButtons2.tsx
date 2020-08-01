import React, { FC } from "react";

interface IProps2 {
  name2: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class RadioGroup2 extends React.Component<IProps2, IState> {
  render() {
    return (
      <div>
        {this.props.name2}
        {/*{this.renderChildren2()}*/}
      </div>
    );
  }
}

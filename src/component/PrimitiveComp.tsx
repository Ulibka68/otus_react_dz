import React, { FC } from "react";

class Executioner extends React.Component {
  render() {
    return (this.props.children as any)();
  }
}

export const ExecutionerTest: FC = () => (
  <Executioner>{() => <h1>Hello World!</h1>}</Executioner>
);

interface IProps {
  name2: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

export class Prims extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1>{this.props.name2}</h1>
      </div>
    );
  }
}

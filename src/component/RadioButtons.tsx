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

class RadioGroup<IProps, IState> extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.name3 = this.props.na;
    this.renderChildren2 = this.renderChildren2.bind(this);
  }

  renderChildren2() {
    const nameParent = this.props.name2;

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        name: this.props.name,
      });
    });
  }

  render() {
    return (
      <div className="group">
        {/*{this.props.n}*/}
        {/*{this.renderChildren2()}*/}
      </div>
    );
  }
}

interface RadioButtonProp {
  value: string;
}

export const RadioButton: FC<RadioButtonProp> = (props) => {
  return <input type="radio" />;
};

export const TestRadioGroup: FC = () => (
  <RadioGroup name="g1">
    <RadioButton value="first">First</RadioButton>
    <RadioButton value="second">Second</RadioButton>
    <RadioButton value="third">Third</RadioButton>
  </RadioGroup>
);

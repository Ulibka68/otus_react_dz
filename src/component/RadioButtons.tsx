import React, { FC, ReactNode } from "react";

interface IProps {
  nameGroup: string;
}
type IState = any;

export class RadioGroup extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    const nameParent = this.props.nameGroup;

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        name: nameParent,
      });
    });
  }

  render() {
    return <div className="group">{this.renderChildren()}</div>;
  }
}

interface RadioButtonProp {
  value: string;
  name?: string;
  labelBefore?: string;
  labelAfter?: string;
  checked?: boolean;
}

export const RadioButton: FC<RadioButtonProp> = ({
  value,
  name = "nm1",
  labelBefore,
  labelAfter,
  checked = false,
}) => {
  return (
    <label>
      {labelBefore && labelBefore}
      <input type="radio" name={name} value={value} />
      {/* если вводить checked - то надо дописать управляемый компонент */}
      {/*<input type="radio" name={name} value={value} checked={checked} />*/}
      {labelAfter && labelAfter}
    </label>
  );
};

export const TestRadioGroup: FC = () => (
  <RadioGroup nameGroup="grp1">
    <RadioButton value="first" labelAfter="First" />
    <RadioButton value="second" labelAfter="Second" />
    <RadioButton value="third" labelAfter="Third" />
  </RadioGroup>
);

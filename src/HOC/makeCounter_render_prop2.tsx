import React from "react";

interface InjectedCounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface CounterProps extends InjectedCounterProps {
  style: React.CSSProperties;
}

interface MakeCounterProps {
  minValue: number;
  maxValue: number;
  initialValue?: number;
  children(props: InjectedCounterProps): JSX.Element;
}

interface MakeCounterState {
  value: number;
}

class MakeCounter extends React.Component<MakeCounterProps, MakeCounterState> {
  state: MakeCounterState = {
    value: 0,
  };
  constructor(props: MakeCounterProps) {
    super(props);
    let { initialValue } = this.props;
    if (!initialValue || initialValue < this.props.minValue)
      initialValue = this.props.minValue;
    if (initialValue > this.props.maxValue) initialValue = this.props.maxValue;
    this.state.value = initialValue;
  }

  increment = () => {
    this.setState((prevState) => ({
      value:
        prevState.value === this.props.maxValue
          ? prevState.value
          : prevState.value + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      value:
        prevState.value === this.props.minValue
          ? prevState.value
          : prevState.value - 1,
    }));
  };

  render() {
    return this.props.children({
      value: this.state.value,
      onIncrement: this.increment,
      onDecrement: this.decrement,
    });
  }
}

const Counter = (props: CounterProps) => (
  <div style={props.style}>
    <button onClick={props.onDecrement}> - </button>
    {props.value}
    <button onClick={props.onIncrement}> + </button>
  </div>
);

interface WrappedCounterProps extends CounterProps {
  minValue: number;
  maxValue: number;
  initialValue?: number;
}

export const WrappedCounter = ({
  minValue,
  maxValue,
  initialValue,
  ...props
}: WrappedCounterProps) => (
  <MakeCounter minValue={minValue} maxValue={maxValue} initialValue={initialValue} >
    {(injectedProps) => <Counter {...props} {...injectedProps} />}
  </MakeCounter>
);

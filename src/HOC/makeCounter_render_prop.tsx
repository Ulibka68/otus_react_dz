import React from "react";

interface InjectedCounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface MakeCounterProps {
  minValue?: number;
  maxValue?: number;
  children(props: InjectedCounterProps): JSX.Element;
}

interface MakeCounterState {
  value: number;
}

class MakeCounter extends React.Component<MakeCounterProps, MakeCounterState> {
  state: MakeCounterState = {
    value: 0,
  };

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

/*
 ****************** Использование
 */
export interface CounterProps {
  style: React.CSSProperties;
  value: number;
  minValue?: number;
  maxValue?: number;
}

export const Counter = (props: CounterProps) => (
  <MakeCounter minValue={props.minValue} maxValue={props.maxValue}>
    {(injectedProps) => (
      <div style={props.style}>
        <button onClick={injectedProps.onDecrement}> - </button>
        {injectedProps.value}
        <button onClick={injectedProps.onIncrement}> + </button>
      </div>
    )}
  </MakeCounter>
);

const Counter2 = (props: CounterProps) => (
  <MakeCounter minValue={props.minValue} maxValue={props.maxValue}>
    {(injectedProps) => (
      <div>
        <div>Some other value: {props.value}</div>
        <div style={props.style}>
          <button onClick={injectedProps.onDecrement}> - </button>
          {injectedProps.value}
          <button onClick={injectedProps.onIncrement}> + </button>
        </div>
        {props.minValue !== undefined ? (
          <div>Min value: {props.minValue}</div>
        ) : null}
        {props.maxValue !== undefined ? (
          <div>Max value: {props.maxValue}</div>
        ) : null}
      </div>
    )}
  </MakeCounter>
);

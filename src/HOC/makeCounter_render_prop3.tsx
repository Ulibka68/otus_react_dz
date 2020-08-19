import React from "react";

/***********************************************
 * Копия предыдущей части
 ***********************************************/

export type SetDifference<A, B> = A extends B ? never : A;
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;
export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;
/**
 * Omit (complements Pick)
 * @desc From `T` remove a set of properties by key `K`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type Props = Omit<Props, 'age'>;
 */
export type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>;

export interface InjectedCounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface MakeCounterProps {
  minValue?: number;
  maxValue?: number;
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
    const { initialValue = 8 } = this.props;
    console.log("MakeCounterProps : ", this.props);
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

/***********************************************
 * НОВОЕ
 ***********************************************/

// generating a HOC from the render prop component:

type MakeCounterHocProps = Omit<MakeCounterProps, "children">;

export const makeCounter3 = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.FC<Subtract<P, InjectedCounterProps> & MakeCounterHocProps> => ({
  minValue,
  maxValue,
  initialValue,
  ...props
}: MakeCounterHocProps) => (
  <MakeCounter
    minValue={minValue}
    maxValue={maxValue}
    initialValue={initialValue}
  >
    {(injectedProps) => <Component {...(props as P)} {...injectedProps} />}
  </MakeCounter>
);

/*
 Здесь методы из предыдущего сообщения в блоге, наряду с существующими типами компонента render prop, используются для создания HOC.
 Единственное, на что следует обратить внимание, это то, что мы должны удалить свойство рендеринга (дочерние элементы) из реквизита HOC,
 чтобы он не отображался при использовании:
type MakeCounterHocProps = Omit<MakeCounterProps, 'children'>;
 */

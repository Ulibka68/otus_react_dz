/*
 Передаваемый props может быть строкой либо #id
    6
    "#divide"
*/

type typeOpName =
  | "7"
  | "8"
  | "9"
  | "#left"
  | "#right"
  | "4"
  | "5"
  | "6"
  | "#divide"
  | "#multiply"
  | "1"
  | "2"
  | "3"
  | "#minus"
  | "#plus"
  | "0"
  | "00"
  | "."
  | "C"
  | "#equal"
  | "("
  | ")"
  | "+"
  | "-"
  | "/"
  | "*"
  | "00"
  | "."
  | "CLEAR"
  | "=";

export interface OperandProps {
  opName: typeOpName;
  passOperand: string;
  additional_class?: string;
  handleClick: (operand: string) => void;
}

export class CalcWrapperButton {
  constructor(
    public displayName: typeOpName,
    public passOperand: typeOpName,
    public additional_class?: string
  ) {}
}

export interface CalcWrapperButtonOP {
  displayName: typeOpName;
  passOperand: typeOpName;
  additional_class?: string;
}

export function helperOperand(inpstr: string[][]) {
  return inpstr.map((value) =>
    value.length === 3
      ? new CalcWrapperButton(
          <typeOpName>value[0],
          <typeOpName>value[1],
          value[2]
        )
      : new CalcWrapperButton(<typeOpName>value[0], <typeOpName>value[1])
  );
}

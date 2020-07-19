import React, { FC } from "react";
import { CalcWrapperButton } from "./component_Interface";
import SvgCalcSprite from "./SvgCalcSprite";
import Operand from "./Operand";
import type { CalcWrapperProps } from "./component_Interface";
import "./CalcWrapper.css";

const CalcWrapper: FC<CalcWrapperProps> = ({ messageline, callBack }) => {
  const operands: CalcWrapperButton[] = [
    new CalcWrapperButton("7", "7"),
    new CalcWrapperButton("8", "8"),
    new CalcWrapperButton("9", "9"),
    new CalcWrapperButton("#left", "("),
    new CalcWrapperButton("#right", ")"),
    new CalcWrapperButton("4", "4"),
    new CalcWrapperButton("5", "5"),
    new CalcWrapperButton("6", "6"),
    new CalcWrapperButton("#divide", "/"),
    new CalcWrapperButton("#multiply", "*"),
    new CalcWrapperButton("1", "1"),
    new CalcWrapperButton("2", "2"),
    new CalcWrapperButton("3", "3"),
    new CalcWrapperButton("#minus", "-"),
    new CalcWrapperButton("#plus", "+"),
    new CalcWrapperButton("0", "0"),
    new CalcWrapperButton("00", "00"),
    new CalcWrapperButton(".", "."),
    new CalcWrapperButton("C", "CLEAR", "operandC"),
    new CalcWrapperButton("#equal", "="),
  ];

  const handle_opernad_callback = (op: string) => {
    callBack(op);
  };

  return (
    <>
      <SvgCalcSprite />
      <div className="button_container">
        <div className="result-line number">{messageline}</div>
        {operands.map((el) => (
          <Operand
            opName={el.displayName}
            passOperand={el.passOperand}
            handleClick={handle_opernad_callback}
            additional_class={el.additional_class}
            key={el.displayName}
          />
        ))}
      </div>
    </>
  );
};

export default CalcWrapper;

import React, { FC } from "react";
import { CalcWrapperButton, helperOperand } from "./СomponentInterface";
import SvgCalcSprite from "./SvgCalcSprite";
import Operand from "./Operand";
import "./CalcWrapper.css";

export interface CalcWrapperProps {
  messageline: string;
  callBack: (passOperand: string) => void;
}

const CalcWrapper: FC<CalcWrapperProps> = ({ messageline, callBack }) => {
  const operandSet = [
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["#left", "["],
    ["#right", "]"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["#divide", "/"],
    ["#multiply", "*"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["#minus", "-"],
    ["#plus", "+"],
    ["0", "0"],
    ["00", "00"],
    [".", "."],
    ["C", "CLEAR", "operandC"],
    ["#equal", "="],
  ];
  const operands: CalcWrapperButton[] = helperOperand(operandSet);

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

import React from "react";
import { action } from "@storybook/addon-actions";
import Operand from "./Operand";
import SvgCalcSprite from "./SvgCalcSprite";

export default {
  title: "Operand",
  component: Operand,
};
// eslint-disable-next-line  @typescript-eslint/no-empty-function
const clickFN = () => {};

export const Text = () => {
  return (
    <>
      <SvgCalcSprite />
      <Operand opName="55" passOperand="55" handleClick={clickFN} />
      <Operand opName="#divide" passOperand="55" handleClick={clickFN} />
    </>
  );
};

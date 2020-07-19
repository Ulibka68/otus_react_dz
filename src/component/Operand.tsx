import React, { FC } from "react";
import type { OperandProps } from "./component_Interface";

const Operand: FC<OperandProps> = ({
  opName,
  passOperand,
  handleClick,
  additional_class,
}) => {
  const handleClickOP = () => {
    // console.log('click : ' + passOperand);
    handleClick(passOperand);
  };

  if (opName?.charAt(0) === "#") {
    return (
      <div className="number " onClick={handleClickOP}>
        <svg className="svg-operand2">
          <use xlinkHref={opName} />
        </svg>
      </div>
    );
  } else {
    return (
      <div
        className={additional_class ? "number " + additional_class : "number"}
        onClick={handleClickOP}
      >
        {opName}
      </div>
    );
  }
};

export default Operand;
export const getOperand = (props: OperandProps) => <Operand {...props} />;

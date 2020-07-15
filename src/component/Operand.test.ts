import React from "react";
import {mount, shallow} from "enzyme";
import Operand from './Operand';
import type { OperandProps } from "./component_Interface";


describe("Operand test", () => {

    it("renders passed component with field/onClick params and proper field size", () => {
        const clickFN = () => {};
        const props = {
            opName : "55",
            passOperand : "55",
            handleClick : clickFN
        };
        const oprnd = shallow(<Operand {...props}/> );
        const oprnd1 = shallow(<Operand opName = "55"   passOperand = "55" handleClick = {clickFN}/>);
    });
});

// <Operand opName = "55"   passOperand = "55"         handleClick = {clickFN}/>
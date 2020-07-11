/*
 Передаваемый props может быть строкой либо #id
    6
    "#divide"
*/

export interface OperandProps {
    // is cell filled flag
    opName : string;
    passOperand : string;
    additional_class? : string;
    handleClick : (operand : string) => void;
}

export interface CalcWrapperProps {
    messageline : string;
    callBack : (passOperand : string) => void;
}

export class CalcWrapperButton {
    displayName : string;
    passOperand : string;
    additional_class? : string;

    constructor( displayNameP : string, passOperandP : string , additional_classP? : string) {
        this.displayName=displayNameP;
        this.passOperand=passOperandP;
        if (additional_classP) this.additional_class = additional_classP;
    }
}
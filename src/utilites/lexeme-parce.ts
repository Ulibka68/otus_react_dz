const operators: string[] = ["SQUARE", "+", "-", "*", "/", "^", "!", "(", ")"];

type opType = "unary" | "binary";
export type NumStr = number | string;

type opFunc = (x: number, y?: number) => number;

export interface operand {
    opName: string;
    priority: number;
    type: opType;
    exec: opFunc;
}

class operandCl implements operand {
    opName: string;
    priority: number;
    type: opType;
    exec: opFunc;

    constructor(
        opNameP: string,
        priorityP: number,
        typeP: opType,
        execP: opFunc
    ) {
        this.opName = opNameP;
        this.priority = priorityP;
        this.type = typeP;
        this.exec = execP;
    }
}

// | Опеpация    | Пpиоpитет |
// |    (        |     0     |
// |    )        |     1     |
// |   +|-       |     2     |
// |   *|/       |     3     |
// |   ** !+-    |     4     |

/* eslint-disable @typescript-eslint/no-unused-vars */
const operatorsObj: operand[] = [
    new operandCl("(", 0, "unary", (x: number, y = 0) => {
        return 0;
    }),
    new operandCl(")", 1, "unary", (x: number, y = 0) => {
        return 0;
    }),
    new operandCl("+", 2, "binary", (x: number, y = 0) => {
        return x + y;
    }),
    new operandCl("-", 2, "binary", (x: number, y = 0) => {
        return x - y;
    }),
    new operandCl("*", 3, "binary", (x: number, y = 0) => {
        return x * y;
    }),
    new operandCl("/", 3, "binary", (x: number, y = 0) => {
        return x / y;
    }),
    new operandCl("SQUARE", 4, "unary", (x: number, y = 0) => {
        return x * x;
    }),
    new operandCl("^", 5, "binary", (x: number, y = 0) => {
        return Math.pow(x, y);
    }),
    new operandCl("UNARY_MINUS", 4, "unary", (x: number, y = 0) => {
        return -x;
    }),
    new operandCl("UNARY_PLUS", 4, "unary", (x: number, y = 0) => {
        return x;
    }),
    new operandCl("!", 4, "unary", (x: number, y = 0) => {
        x = Math.abs(x);
        let nFaact = 1;
        for (let i = 1; i <= x; i++) nFaact *= i;
        return nFaact;
    }),
];
/* eslint-enable @typescript-eslint/no-unused-vars */

export function parceInpString(inpStr: string): NumStr[] {
    // чтобы не смешивать с * заменим ** на Square
    inpStr = inpStr.replace("**", "SQUARE");

    const regSearch = new RegExp("(" + operators.join("|\\") + ")", "g");
    inpStr = inpStr.replace(regSearch, "|$1|");
    // console.log(inpStr);
    const parces: string[] = inpStr.split("|").filter((value) => {
        return value != "";
    });

    let parcesNum: NumStr[] = []; // eslint-disable-line
    parces.forEach((value) => {
        value = value.trim();
        if (value != "") {
            isNaN(Number(value))
                ? parcesNum.push(value)
                : parcesNum.push(Number(value));
        }
    });
    // console.log(parcesNum);
    return parcesNum;
}

function getOperator(opname: string): operand {
    let op: operand | undefined = operatorsObj.find((el) => {
        return el.opName === opname;
    });
    if (op === undefined) {
        alert("невереный операнд : " + opname);
        op = operatorsObj.find((el) => {
            return el.opName === "+";
        });
    }

    // вернем новый экземпляр
    // @ts-ignore
    return new operandCl(op.opName, op.priority, op.type, op.exec);
}

export function convertToPolishNote(parcesNum: NumStr[]): (NumStr | operand)[] {
    // выходная строка
    const operandStack: (NumStr | operand)[] = [];
    const funcStack: operand[] = [];

    for (let i = 0; i < parcesNum.length; i++) {
        if (typeof parcesNum[i] === "number") {
            // операнд
            operandStack.push(parcesNum[i]);
        } else {
            // а) если стек пуст, то опеpация из входной стpоки пеpеписывается в стек;
            if (funcStack.length === 0) {
                let curOperator = parcesNum[i];
                if (curOperator === "+" || curOperator === "-") {
                    //    ? это унарный оператор или обычный
                    // надо посмотреть на пред символ
                    if (i === 0) {
                        // это унарный оператор
                        curOperator =
                            curOperator === "+" ? "UNARY_PLUS" : "UNARY_MINUS";
                    } else {
                        if (parcesNum[i - 1] === "(") {
                            // это унарный оператор
                            curOperator =
                                curOperator === "+"
                                    ? "UNARY_PLUS"
                                    : "UNARY_MINUS";
                        }
                    }
                }
                funcStack.push(getOperator(<string>curOperator));
            } else {
                // в) если очеpедной символ из исходной стpоки есть откpывающая скобка, то он пpоталкивается в стек;
                const curOperator = parcesNum[i];
                if (curOperator === "(") {
                    funcStack.push(getOperator(<string>curOperator));
                } else {
                    // г) закpывающая кpуглая скобка выталкивает все опеpации из стека до ближайшей откpывающей скобки, сами скобки в выходную стpоку не пеpеписываются, а уничтожают дpуг дpуга.
                    if (curOperator === ")") {
                        while (
                            funcStack.length > 0 &&
                            funcStack[funcStack.length - 1].opName != "("
                        ) {
                            operandStack.push(funcStack[funcStack.length - 1]);
                            funcStack.pop();
                        }
                        if ( funcStack.length === 0) {
                            alert("Нет открывающей скобки");
                            return ["0"];
                        }
                        if (funcStack[funcStack.length - 1].opName != "(") {
                            alert("Несоответствие скобок");
                            return ["0"];
                        }
                        funcStack.pop();
                    } else {
                        // б) опеpация выталкивает из стека все опеpации с большим или pавным пpиоpитетом в выходную стpоку;
                        let curOperator = parcesNum[i];
                        if (curOperator === "+" || curOperator === "-") {
                            //    ? это унарный оператор или обычный
                            // надо посмотреть на пред символ
                            if (i === 0) {
                                // это унарный оператор
                                curOperator =
                                    curOperator === "+"
                                        ? "UNARY_PLUS"
                                        : "UNARY_MINUS";
                            } else {
                                if (parcesNum[i - 1] === "(") {
                                    // это унарный оператор
                                    curOperator =
                                        curOperator === "+"
                                            ? "UNARY_PLUS"
                                            : "UNARY_MINUS";
                                }
                            }
                        }
                        // б) опеpация выталкивает из стека все опеpации с большим или pавным пpиоpитетом в выходную стpоку;
                        const opObj = getOperator(<string>curOperator);
                        while (
                            funcStack.length > 0 &&
                            funcStack[funcStack.length - 1].priority >=
                                opObj.priority
                        ) {
                            operandStack.push(funcStack[funcStack.length - 1]);
                            funcStack.pop();
                        }
                        funcStack.push(opObj);
                    }
                }
            }
        }
    }
    if (funcStack.length > 0) {
        // вытолкнуть в выходную строку начиная с конца
        while (funcStack.length > 0) { // @ts-ignore
            operandStack.push(funcStack.pop());
        }
    }

    return operandStack;
}

// Автоматизация вычисления выражений в обратной польской нотации основана на использовании стека. Алгоритм вычисления для стековой машины элементарен:
//
//     Обработка входного символа
// Если на вход подан операнд, он помещается на вершину стека.
//     Если на вход подан знак операции, то соответствующая операция выполняется над требуемым количеством значений, извлечённых из стека, взятых в порядке добавления.
//     Результат выполненной операции кладётся на вершину стека.
//     Если входной набор символов обработан не полностью, перейти к шагу 1.
// После полной обработки входного набора символов результат вычисления выражения лежит на вершине стека.

export function CalcPolishNote(operandStack: (NumStr | operand)[]): number {
    while (operandStack.length > 1) {
        for (let i = 0; i < operandStack.length; i++) {
            if (operandStack[i] instanceof operandCl) {
                //   провести операцию
                const curOperand: operand = <operand>operandStack[i];

                let resultOP: number;
                if (curOperand.type === "binary") {
                    // 2 аргумента
                    resultOP = curOperand.exec(
                        <number>operandStack[i - 2],
                        <number>operandStack[i - 1]
                    );
                    operandStack.splice(i - 2, 3, resultOP);
                } else {
                    resultOP = curOperand.exec(<number>operandStack[i - 1]);
                    operandStack.splice(i - 1, 2, resultOP);
                }

                break;
            }
        }
    }

    return <number>operandStack[0];
}

export function CalcInputString( inp : string) : number {
    const parcesNum: NumStr[] = parceInpString(inp);
    // console.log(parcesNum);
    const polishNote = convertToPolishNote(parcesNum);
    return  CalcPolishNote(polishNote);
}
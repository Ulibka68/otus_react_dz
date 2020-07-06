const operators: string[] = ["SQUARE", "+", "-", "*", "/", "^", "!", "(", ")"];
// | Опеpация    | Пpиоpитет |
// |    (        |     0     |
// |    )        |     1     |
// |   +|-       |     2     |
// |   *|/       |     3     |
// |   ** !+-    |     4     |

type opType = "unary" | "binary";
// interface opFunc  (x : number, y? : number) => number;

type opFunc = (x: number, y?: number) => number;

interface operand {
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

const opeeratorsObj: operand[] = [
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
    })
];

function parceInpString(inpStr: string) {
    // чтобы не смешивать с * заменим ** на Square
    inpStr = inpStr.replace("**", "SQUARE");

    const regSearch = new RegExp("(" + operators.join("|\\") + ")", "g");
    inpStr = inpStr.replace(regSearch, "|$1|");
    // console.log(inpStr);
    const parces: string[] = inpStr.split("|").filter(value => {
        return value != "";
    });

    type NumStr = number | string;

    let parcesNum: NumStr[] = []; // eslint-disable-line
    parces.forEach(value => {
        isNaN(Number(value))
            ? parcesNum.push(value)
            : parcesNum.push(Number(value));
    });
    // console.log(parcesNum);
    return parcesNum;
}

parceInpString(" 3.22 +2^3 +(2.2***8 +4*5)/   5");

export const lexeme = 22222;

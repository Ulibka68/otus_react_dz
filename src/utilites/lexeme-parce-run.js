"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexeme_parce_1 = require("./lexeme-parce");
// const parcesNum: NumStr[] = parceInpString(" 3.22 +2^3 +(2.2***8 +4*5)/   5");
var parcesNum = lexeme_parce_1.parceInpString(" 3 +3! +  2^3 +   (2.2***8 +4*5)/   5");
// const parcesNum: NumStr[] = parceInpString("(2+3)*(4+7)-2");
// const parcesNum: NumStr[] = parceInpString("2!+5*2");
// const parcesNum: NumStr[] = parceInpString("2+3");
console.log(parcesNum);
var polishNote = lexeme_parce_1.convertToPolishNote(parcesNum);
console.log(polishNote);
console.log(lexeme_parce_1.CalcPolishNote(polishNote));
//# sourceMappingURL=lexeme-parce-run.js.map
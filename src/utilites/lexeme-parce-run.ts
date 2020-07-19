import {
  parceInpString,
  NumStr,
  convertToPolishNote,
  CalcPolishNote,
} from "./lexeme-parce";

// const parcesNum: NumStr[] = parceInpString(" 3.22 +2^3 +(2.2***8 +4*5)/   5");
const parcesNum: NumStr[] = parceInpString(
  " 3 +3! +  2^3 +   (2.2***8 +4*5)/   5"
);
// const parcesNum: NumStr[] = parceInpString("(2+3)*(4+7)-2");
// const parcesNum: NumStr[] = parceInpString("2!+5*2");
// const parcesNum: NumStr[] = parceInpString("2+3");

console.log(parcesNum);

const polishNote = convertToPolishNote(parcesNum);
console.log(polishNote);
console.log(CalcPolishNote(polishNote));

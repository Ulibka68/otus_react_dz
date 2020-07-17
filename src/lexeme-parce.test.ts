import {
    parceInpString,
    NumStr,
    convertToPolishNote,
    CalcPolishNote,
    operand,
} from "./lexeme-parce";

describe("перевод string в массив - набор операндов parceInpString ", () => {
    // parceInpString разбирает строку на массив токенов
    test(' parceInpString("3+2")', () => {
        expect(parceInpString(" 3+2")).toEqual([3, "+", 2]);
    });

    test(' parceInpString("3+2^4")', () => {
        expect(parceInpString(" 3+2^4")).toEqual([3, "+", 2, "^", 4]);
    });
});

test("convertToPolishNote 3+2", () => {
    let polish = convertToPolishNote([3, "+", 2]);

    expect(polish).toEqual([
        3,
        2,
        {
            exec: expect.any(Function),
            opName: "+",
            priority: 2,
            type: "binary",
        },
    ]);
});

describe("Завершающий тест", () => {
    const parcesNum: NumStr[] = parceInpString(
        " 3 +3! +2^3 +(2.2***8 +4*5)/   5"
    );
    const polishNote = convertToPolishNote(parcesNum);
    const result = CalcPolishNote(polishNote);

    test("Завершающее вычисление", () => {
        expect(result).toEqual(28.744);
    });
});

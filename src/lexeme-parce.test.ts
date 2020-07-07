import {
    parceInpString,
    NumStr,
    convertToPolishNote,
    CalcPolishNote, operand,
} from "./lexeme-parce";

// const parcesNum: NumStr[] = parceInpString(" 3.22 +2^3 +(2.2***8 +4*5)/   5");

// parceInpString разбирает строку на массив токенов
test(' parceInpString("3+2")', () => {
    expect(parceInpString(" 3+2")).toEqual([3, "+", 2]);
});

test(' parceInpString("3+2^4")', () => {
    expect(parceInpString(" 3+2^4")).toEqual([3, "+", 2,"^",4]);
});

describe('can1 = can2 ?', () => {

        const can1 = {
            flavor: 'grapefruit',
            ounces: 12,
            // exec : function (x,y) { return 2}
        };
        const can2 = {
            flavor: 'grapefruit',
            ounces: 12,
            // exec : function (x,y ) { return 2}
        };

    test('have all the same properties', () => {
        expect(can1).toEqual(can2);
    });
    test('are not the exact same can', () => {
        expect(can1).not.toBe(can2);
    });
});

describe('arrayContaining', () => {
    const expected = ['Alice', 'Bob'];
    it('matches even if received contains additional elements', () => {
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});

test('convertToPolishNote 3+2', () => {
    let polish = convertToPolishNote([3, "+", 2]);

    // expect (polish).toEqual(expect.arrayContaining([3,2]));
    // expect ( (<operand>polish[2]).opName).toEqual("+");
    // expect ( JSON.stringify(polish)).toEqual('[3,2,{"opName":"+","priority":2,"type":"binary"}]');

    expect ( polish).toEqual([3,2,{exec: expect.any(Function) , opName:"+",priority:2,type:"binary"}]);
});


describe('Завершающий тест', () => {
    const parcesNum: NumStr[] = parceInpString(" 3 +3! +2^3 +(2.2***8 +4*5)/   5");
    const polishNote = convertToPolishNote(parcesNum);
    const result = CalcPolishNote(polishNote);

    test('Завершающее вычисление', () => {
        expect(result).toEqual(28.744);
    });
});
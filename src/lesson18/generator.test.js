"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var dictionary_1 = require("./dictionary");
describe("Generators Intro", function () {
    it("Step by step run", function () {
        var generator = generator_1.generateSequence();
        var firstStep = generator.next();
        var secondStep = generator.next();
        var thirdStep = generator.next();
        expect(firstStep.value).toBe(1);
        expect(firstStep.done).toBe(false);
        expect(secondStep.value).toBe(2);
        expect(firstStep.done).toBe(false);
        expect(thirdStep.value).toBe(3);
        expect(thirdStep.done).toBe(true);
    });
    it("spread generateSequence", function () {
        var generator = generator_1.generateSequence();
        expect(__spread(generator)).toStrictEqual([1, 2]);
    });
    it("spread generateSequenceYieldOnly", function () {
        var generator = generator_1.generateSequenceYieldOnly();
        expect(__spread(generator)).toStrictEqual([1, 2, 3]);
    });
    it("for..of run", function () {
        var e_1, _a;
        var generator = generator_1.generateSequence();
        var iterator = 1;
        try {
            for (var generator_2 = __values(generator), generator_2_1 = generator_2.next(); !generator_2_1.done; generator_2_1 = generator_2.next()) {
                var value = generator_2_1.value;
                expect(value).toBe(iterator);
                iterator++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (generator_2_1 && !generator_2_1.done && (_a = generator_2.return)) _a.call(generator_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    it("infifityIterator run", function () {
        var e_2, _a;
        var generator = generator_1.longIterator();
        var firstStep = generator.next();
        generator.next();
        generator.next();
        var fourthStep = generator.next();
        expect(firstStep.value).toBe(1);
        expect(firstStep.done).toBe(false);
        expect(fourthStep.value).toBe(4);
        expect(fourthStep.done).toBe(false);
        var iterator = 4;
        try {
            for (var generator_3 = __values(generator), generator_3_1 = generator_3.next(); !generator_3_1.done; generator_3_1 = generator_3.next()) {
                var value = generator_3_1.value;
                iterator++;
                expect(value).toBe(iterator);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (generator_3_1 && !generator_3_1.done && (_a = generator_3.return)) _a.call(generator_3);
            }
            finally { if (e_2) throw e_2.error; }
        }
        expect(iterator).toBe(101);
    });
    it("generateRange run", function () {
        var generator = generator_1.generateRange(10, 15);
        expect(__spread(generator)).toStrictEqual([10, 11, 12, 13, 14, 15]);
    });
    it("smallRange run", function () {
        var generator = generator_1.smallRange();
        expect(__spread(generator)).toStrictEqual([1, 2, 3]);
    });
    it("middleRange run", function () {
        var generator = generator_1.middleRange();
        expect(__spread(generator)).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("middleRange2 run", function () {
        var generator = generator_1.middleRange2();
        expect(__spread(generator)).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("rand between range", function () {
        var randNumber = generator_1.rand(0, 3);
        var result = [0, 1, 2, 3].includes(randNumber);
        expect(result).toBe(true);
    });
    it("wordGenerator", function () {
        var generator = generator_1.wordGenerator();
        var firstResult = generator.next();
        var firstResultCheck = dictionary_1.dictionary.includes(firstResult.value);
        var secondResult = generator.next();
        var secondResultCheck = dictionary_1.dictionary.includes(secondResult.value);
        expect(firstResultCheck && secondResultCheck).toBe(true);
    });
    it("getWord", function () {
        var generator = generator_1.getWord();
        var listKeys = generator.next().value;
        var word = generator.next(listKeys[5]).value;
        expect(word).toBe("Actons");
    });
    it("dataConsumer", function () {
        var generator = generator_1.dataConsumer();
        expect(generator.next()).toStrictEqual({ value: undefined, done: false });
        expect(generator.next("a")).toStrictEqual({
            value: undefined,
            done: false,
        });
        expect(generator.next("b")).toStrictEqual({
            value: ["Started", "1. a", "2. b"],
            done: true,
        });
    });
    it("passwordGenerator", function () {
        var oneWord = generator_1.passwordGenerator(1);
        var fourWord = generator_1.passwordGenerator(4);
        expect(/([A-Z]{1}[a-z]+){1}/.test(oneWord)).toBe(true);
        expect(/([A-Z]{1}[a-z]+){4}/.test(fourWord)).toBe(true);
    });
    it("fibonacciSequense", function () {
        var generator = generator_1.fibonacciSequense(10);
        var array = __spread(generator);
        expect(array).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it("01 sequence", function () {
        var generator = generator_1.strangeZeroOneSequence(1);
        var array = __spread(generator);
        expect(array).toStrictEqual([0, 1]);
    });
    it("01011011101111 sequence", function () {
        var generator = generator_1.strangeZeroOneSequence(4);
        var array = __spread(generator);
        expect(array.join("")).toBe("01011011101111");
    });
    it("BinaryTree", function () {
        var tree = new generator_1.BinaryTree("a", new generator_1.BinaryTree("b", new generator_1.BinaryTree("c"), new generator_1.BinaryTree("d")), new generator_1.BinaryTree("e"));
        var array = __spread(tree);
        expect(array).toStrictEqual(["a", "b", "c", "d", "e"]);
    });
});
//# sourceMappingURL=generator.test.js.map
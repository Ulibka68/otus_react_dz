"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.wrapped = exports.coroutine = exports.BinaryTree = exports.strangeZeroOneSequence = exports.fibonacciSequense = exports.passwordGenerator = exports.dataConsumer = exports.getWord = exports.wordGenerator = exports.rand = exports.middleRange2 = exports.middleRange = exports.smallRange = exports.generateRange = exports.longIterator = exports.generateSequenceYieldOnly = exports.generateSequence = void 0;
var dictionary_1 = require("./dictionary");
function generateSequence() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/, 3];
        }
    });
}
exports.generateSequence = generateSequence;
function generateSequenceYieldOnly() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.generateSequenceYieldOnly = generateSequenceYieldOnly;
function longIterator() {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, ++i];
            case 2:
                _a.sent();
                if (i > 100) {
                    return [2 /*return*/, i];
                }
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.longIterator = longIterator;
function generateRange(start, end) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = start;
                _a.label = 1;
            case 1:
                if (!(i <= end)) return [3 /*break*/, 4];
                return [4 /*yield*/, i];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.generateRange = generateRange;
function smallRange() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [5 /*yield**/, __values(generateRange(1, 3))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.smallRange = smallRange;
function middleRange() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [5 /*yield**/, __values(generateRange(3, 10))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.middleRange = middleRange;
function middleRange2() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [5 /*yield**/, __values(generateRange(3, 5))];
            case 1:
                _a.sent();
                return [5 /*yield**/, __values(generateRange(6, 10))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.middleRange2 = middleRange2;
exports.rand = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function wordGenerator() {
    var length, wordNumber;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                length = dictionary_1.dictionary.length;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                wordNumber = exports.rand(0, length - 1);
                return [4 /*yield*/, dictionary_1.dictionary[wordNumber]];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.wordGenerator = wordGenerator;
function getWord() {
    var idx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __spread(dictionary_1.dictionary.keys())];
            case 1:
                idx = _a.sent();
                return [4 /*yield*/, dictionary_1.dictionary[idx]];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.getWord = getWord;
function dataConsumer() {
    var result, _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                result = ["Started"];
                // console.warn(result);
                _b = (_a = result).push;
                _c = "1. ";
                return [4 /*yield*/];
            case 1:
                // console.warn(result);
                _b.apply(_a, [_c + (_g.sent())]); // (A)
                _e = (_d = result).push;
                _f = "2. ";
                return [4 /*yield*/];
            case 2:
                _e.apply(_d, [_f + (_g.sent())]);
                return [2 /*return*/, result];
        }
    });
}
exports.dataConsumer = dataConsumer;
exports.passwordGenerator = function (countWords) {
    var generator = wordGenerator();
    var password = "";
    for (var i = 0; i < countWords; i++) {
        var nextWord = generator.next().value;
        password = "" + password + nextWord;
    }
    return password;
};
// Time complexity O(N)
function fibonacciSequense(length) {
    var _a, prev, current, next;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = __read([0, 0, 1], 3), prev = _a[0], current = _a[1], next = _a[2];
                _b.label = 1;
            case 1:
                if (!(length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, current];
            case 2:
                _b.sent();
                prev = current;
                current = next;
                next = prev + next;
                length--;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.fibonacciSequense = fibonacciSequense;
// Time complexity https://www.desmos.com/calculator/g8ojgsx31c
function strangeZeroOneSequence(length) {
    var counter, iterator;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                counter = 0;
                _a.label = 1;
            case 1:
                if (!(counter < length)) return [3 /*break*/, 6];
                iterator = 0;
                return [4 /*yield*/, iterator];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                if (!(iterator <= counter)) return [3 /*break*/, 5];
                return [4 /*yield*/, 1];
            case 4:
                _a.sent();
                iterator++;
                return [3 /*break*/, 3];
            case 5:
                counter++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}
exports.strangeZeroOneSequence = strangeZeroOneSequence;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    /** Prefix iteration */
    BinaryTree.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.value];
                case 1:
                    _a.sent();
                    if (!this.left) return [3 /*break*/, 3];
                    return [5 /*yield**/, __values(this.left)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!this.right) return [3 /*break*/, 5];
                    return [5 /*yield**/, __values(this.right)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
/**
 * Returns a function that, when called,
 * returns a generator object that is immediately
 * ready for input via `next()`
 */
exports.coroutine = function (generatorFunction) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var generatorObject = generatorFunction.apply(void 0, __spread(args));
    generatorObject.next();
    return generatorObject;
}; };
var gen = function () {
    var result, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = "First input: ";
                return [4 /*yield*/];
            case 1:
                result = _a + (_b.sent());
                return [2 /*return*/, result];
        }
    });
};
exports.wrapped = exports.coroutine(gen);
exports.wrapped().next("hello!");
//# sourceMappingURL=generator.js.map
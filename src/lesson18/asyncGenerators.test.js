"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var asyncGenerators_1 = require("./asyncGenerators");
describe("asyncGenerators", function () {
    it("for..of simpleIterator", function () {
        var e_1, _a;
        var simpleIterator = asyncGenerators_1.createSimpleIterator(1, 5);
        var iterator = 1;
        try {
            for (var simpleIterator_1 = __values(simpleIterator), simpleIterator_1_1 = simpleIterator_1.next(); !simpleIterator_1_1.done; simpleIterator_1_1 = simpleIterator_1.next()) {
                var value = simpleIterator_1_1.value;
                expect(value).toBe(iterator);
                iterator++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (simpleIterator_1_1 && !simpleIterator_1_1.done && (_a = simpleIterator_1.return)) _a.call(simpleIterator_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    it("Spread simpleIterator", function () {
        var simpleIterator = asyncGenerators_1.createSimpleIterator(5, 10);
        expect(__spread(simpleIterator)).toStrictEqual([5, 6, 7, 8, 9, 10]);
    });
    it("createSimpleIteratorWithGenerator", function () {
        var simpleIteratorWithGenerator = asyncGenerators_1.createSimpleIteratorWithGenerator(5, 10);
        expect(__spread(simpleIteratorWithGenerator)).toStrictEqual([5, 6, 7, 8, 9, 10]);
    });
    it("createSimpleAsyncIterator", function () { return __awaiter(void 0, void 0, void 0, function () {
        var simpleIterator, iterator, simpleIterator_2, simpleIterator_2_1, value, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    simpleIterator = asyncGenerators_1.createSimpleAsyncIterator(1, 5);
                    iterator = 1;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    simpleIterator_2 = __asyncValues(simpleIterator);
                    _b.label = 2;
                case 2: return [4 /*yield*/, simpleIterator_2.next()];
                case 3:
                    if (!(simpleIterator_2_1 = _b.sent(), !simpleIterator_2_1.done)) return [3 /*break*/, 5];
                    value = simpleIterator_2_1.value;
                    expect(value).toBe(iterator);
                    iterator++;
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(simpleIterator_2_1 && !simpleIterator_2_1.done && (_a = simpleIterator_2.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(simpleIterator_2)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    }); });
    it("generateSequence", function () { return __awaiter(void 0, void 0, void 0, function () {
        var simpleAsyncGenerator, iterator, simpleAsyncGenerator_1, simpleAsyncGenerator_1_1, value, e_3_1;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    simpleAsyncGenerator = asyncGenerators_1.generateSequence(1, 5);
                    iterator = 1;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    simpleAsyncGenerator_1 = __asyncValues(simpleAsyncGenerator);
                    _b.label = 2;
                case 2: return [4 /*yield*/, simpleAsyncGenerator_1.next()];
                case 3:
                    if (!(simpleAsyncGenerator_1_1 = _b.sent(), !simpleAsyncGenerator_1_1.done)) return [3 /*break*/, 5];
                    value = simpleAsyncGenerator_1_1.value;
                    expect(value).toBe(iterator);
                    iterator++;
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(simpleAsyncGenerator_1_1 && !simpleAsyncGenerator_1_1.done && (_a = simpleAsyncGenerator_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(simpleAsyncGenerator_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_3) throw e_3.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=asyncGenerators.test.js.map
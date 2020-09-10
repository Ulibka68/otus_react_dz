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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSequence = exports.createSimpleAsyncIterator = exports.createSimpleIteratorWithGenerator = exports.createSimpleIterator = void 0;
exports.createSimpleIterator = function (from, to) {
    var _a;
    return (_a = {
            from: from,
            to: to
        },
        _a[Symbol.iterator] = function () { return ({
            next: function () {
                return from <= to ? { done: false, value: from++ } : { done: true };
            },
        }); },
        _a);
};
exports.createSimpleIteratorWithGenerator = function (from, to) {
    var _a;
    return (_a = {},
        _a[Symbol.iterator] = function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = from;
                        _a.label = 1;
                    case 1:
                        if (!(value <= to)) return [3 /*break*/, 4];
                        return [4 /*yield*/, value];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        value++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        },
        _a);
};
exports.createSimpleAsyncIterator = function (from, to) {
    var _a;
    return (_a = {},
        _a[Symbol.asyncIterator] = function () {
            return {
                next: function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, from <= to ? { done: false, value: from++ } : { done: true }];
                            }
                        });
                    });
                },
            };
        },
        _a);
};
function generateSequence(start, end) {
    return __asyncGenerator(this, arguments, function generateSequence_1() {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, __await((_a = {},
                        _a[Symbol.asyncIterator] = function () {
                            return __asyncGenerator(this, arguments, function _a() {
                                var i;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            i = start;
                                            _b.label = 1;
                                        case 1:
                                            if (!(i <= end)) return [3 /*break*/, 6];
                                            return [4 /*yield*/, __await(new Promise(function (resolve) { return setTimeout(resolve, 1000); }))];
                                        case 2:
                                            _b.sent();
                                            return [4 /*yield*/, __await(i)];
                                        case 3: return [4 /*yield*/, _b.sent()];
                                        case 4:
                                            _b.sent();
                                            _b.label = 5;
                                        case 5:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        _a))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.generateSequence = generateSequence;
//# sourceMappingURL=asyncGenerators.js.map
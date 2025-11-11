"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdder = exports.arrayMutate = exports.getName = exports.fetchData = exports.showParams = exports.addStrings = void 0;
//functions.ts
function addNumbers(a, b) {
    return a + b;
}
var addStrings = function (a, b) {
    return a + b;
};
exports.addStrings = addStrings;
var showParams = function (a, b) {
    var msg = "".concat(a, " -> ").concat(b);
    return msg;
};
exports.showParams = showParams;
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
var getName = function (userName) {
    var _a, _b;
    return "".concat((_a = userName === null || userName === void 0 ? void 0 : userName.first) !== null && _a !== void 0 ? _a : "first", " , ").concat((_b = userName === null || userName === void 0 ? void 0 : userName.last) !== null && _b !== void 0 ? _b : "last");
};
exports.getName = getName;
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
function createAdder(num) {
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
exports.default = addNumbers;

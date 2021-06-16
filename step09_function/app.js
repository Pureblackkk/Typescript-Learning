function addNumbers(a, b) {
    return a + b;
}
var res1 = addNumbers(1, 2);
var res2 = addNumbers("1", "2");
var addVar = function (a, b) {
    return a + b;
};
var res1 = addVar(1, 2);
var res2 = addVar("1", "2");
var concatString = function (a, b, c) {
    return a + b + c;
};
console.log(concatString('this', 'is', 'hello'));
console.log(concatString('this', 'is'));
console.log(concatString('this'));
var concatString2 = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
console.log(concatString2('this', 'is', 'hello'));
console.log(concatString2('this', 'is'));
//# sourceMappingURL=app.js.map
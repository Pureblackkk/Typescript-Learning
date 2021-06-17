function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string') {
        return arg1 + "is a string";
    }
    if (typeof arg1 === 'number') {
        return arg1 + 10;
    }
    if (typeof arg1 === 'boolean') {
        return arg1 && false;
    }
}
function addWithUnion2(arg1, arg2) {
    if (typeof arg1 === 'string') {
        return arg1 + "is a string";
    }
    if (typeof arg1 === 'number') {
        return arg1 + 10;
    }
    if (typeof arg1 === 'boolean') {
        return arg1 && false;
    }
}
//# sourceMappingURL=app.js.map
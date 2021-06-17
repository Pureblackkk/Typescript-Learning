function callBack(text) {
    console.log('This is a callback ' + text);
}
function callingFunction(text, callBack) {
    if (typeof callBack === 'function') {
        callBack(text);
    }
    else {
        console.log('Callback is not a function');
    }
}
callingFunction('lala', callBack);
callingFunction('pupu', 'lala');
function callBack2(text) {
    console.log('This is a callback' + text);
}
function callingFunction2(text, callBack) {
    callBack(text);
}
callingFunction2('lala', callBack);
callingFunction2('pupu', 'lala');
//# sourceMappingURL=app.js.map
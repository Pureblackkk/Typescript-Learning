function callBack(text) {
    console.log('This is a callback ' + text);
}

// Using type to test the function (normal way in js)
function callingFunction(text, callBack) {
    if(typeof callBack === 'function') {
        callBack(text);
    }else{
        console.log('Callback is not a function');
    }
}

callingFunction('lala', callBack);
callingFunction('pupu', 'lala');

// Rewrite it in typescript way 
function callBack2(text: string) {
    console.log('This is a callback' + text);
}

function callingFunction2(text: string, callBack: (text: string) => void) {
    callBack(text);
}

callingFunction2('lala', callBack);
callingFunction2('pupu', 'lala'); // Error 
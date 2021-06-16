// Using three dots as an argument array
function testParams(...argArray: number[]) {
    if(argArray.length > 0) {
        for(var i = 0, len = argArray.length; i < len; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
            console.log("arguments " + i + " = " + arguments[i]);
        }
    }
}

testParams(1);
testParams(1, 2, 3, 4);
testParams('a', 'b');

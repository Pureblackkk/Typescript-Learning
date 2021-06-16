// Normal function 
function addNumbers(a: number, b: number): number {
    return a + b;
}
var res1 = addNumbers(1, 2);
var res2 = addNumbers("1", "2"); // Error 

// Anonymous function 
var addVar = function(a: number, b: number): number {
    return a + b;
} 
var res1 = addVar(1, 2);
var res2 = addVar("1", "2"); // Error 


// Anoymous function (Arrow function)
var addVar2 = (a: number, b: number): number => {
    return a + b;
}
var res1 = addVar(1, 2);
var res2 = addVar("1", "2"); // Error 

// Option parameters 
var concatString = function(a: string, b: string, c?: string) {
    return a + b + c;
}
console.log(concatString('this', 'is', 'hello'));
console.log(concatString('this', 'is'));
console.log(concatString('this')); // Error, miss parameter b

// We can detect if c is sent or not and return different value 
var concatString2 = function(a: string, b: string, c?: string) {
    if(c){
        return a + b + c;
    }else{
        return a + b;
    }
}
console.log(concatString2('this', 'is', 'hello'));
console.log(concatString2('this', 'is'));

// Default parameter
// Similar as original js style 
var concatStrings = function(a: string, b: string, c: string = "c") {
    return a + b + c;
}



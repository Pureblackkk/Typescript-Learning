// strongly typed syntax
var a : string = "lalala";
a = "ppp";
var b : number = 9;
var c : boolean = true;

// type inference (When not add annotations, it will be added automatically based on its inital value)
var e = 'lalala';
var f = 10.9;
var g = true;
g = 20; // Will raise error 

// For the most part you don’t need to explicitly learn the rules of inference. 
// If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on.
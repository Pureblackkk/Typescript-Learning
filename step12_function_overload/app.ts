//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: boolean, arg2: boolean): boolean;
function add(arg1: any, arg2: any): any { // This part is necessary, and the type should be any, content will be provided the actual operation
    return arg1 + arg2;
}

console.log(add(1, 2));
console.log(add('a', 'b'));
console.log(add(true, false));
console.log(add(1, '2')); // Error 
//  Combine one or two types using the pipe symbol (|) to denote a Union Type
function addWithUnion(
    arg1: string | number | boolean,
    arg2: string | number | boolean
): string | number | boolean {
    if(typeof arg1 === 'string') {
        return arg1 + "is a string";
    }
    if(typeof arg1 === 'number') {
        return arg1 + 10;
    }
    if(typeof arg1 === 'boolean') {
        return arg1 && false;
    }
}

// Type guards
// Using typeof arg1 === "string" to make sure right operation for right type 

// Type alias 
// Define an alias for a type, using type keyword
type StringNumberBoolean = string | number | boolean;
function addWithUnion2(
    arg1: StringNumberBoolean,
    arg2: StringNumberBoolean
): StringNumberBoolean {
    if(typeof arg1 === 'string') {
        return arg1 + "is a string";
    }
    if(typeof arg1 === 'number') {
        return arg1 + 10;
    }
    if(typeof arg1 === 'boolean') {
        return arg1 && false;
    }
}

// Type alias can also work for function 
type CallbackWithString = (x: string) => void;


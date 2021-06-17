// Inheritance means that an object uses another object as its base type 
// Both classes and interfacrs can use inheritance 

interface IBase {
    id: number;
}

// Using 'extends' to realize inheritance 
interface IDerivedFromBase extends IBase {
    name: string
}

class DerivedClass implements IDerivedFromBase {
    id: number;
    name: string;
}

// Class inheritance is the same 
class BaseClass implements IBase {
    id: number;
}

class DerivedFromClass extends BaseClass implements IDerivedFromBase {
    name: string;
}
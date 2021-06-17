// An interface provides us with a mechanism to define what properties and methods an object must implement
interface IComplexType {
    id: number,
    name: string
}

var complexType : IComplexType = {
    id: 1,
    name: 'lala'
}

var complexType2 : IComplexType = {
    id: 2,
    phone: 1234
} // Error 

// Interface on classes 
interface IComplexType2 {
    id: number,
    name: string,
    print(): string
}

class ComplexType implements IComplexType2 {
    id: number;
    name: string;
    print(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}

var complexType3 = new ComplexType();
console.log(complexType3.id);
console.log(complexType3.name);



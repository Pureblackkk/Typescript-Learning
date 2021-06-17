class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName; 
    }

    move(meters: number = 0) {
        console.log(this.name + "moved" + meters + "m");
    }
}

class Snake extends Animal {
    constructor(theName: string) {
        super(theName);
    }
    
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }

    bite() {
        console.log('Bites')
    }
}

class Horse extends Animal {
    constructor(theName: string) {
        super(theName);
    }

    move(meters = 45) {
        console.log('Galloping...');
        super.move(meters);
    }
}

class Cat extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    move(meters = 1) {
        alert("Jumping...");
        super.move(meters);
    }
}

// Both work fine 
var a: Animal = new Cat("mimi");
var a1: Cat = new Animal("mimi");


// Explicit casting not require because Child object have same properties and fuctions
var b: Cat = a;


// Explicit casting needed, since snake has addtional function 
var c: Snake = a; // Error 
var c2: Snake = new Animal('sisi'); // Error child Snake has more items than father 

// This works fine since Snake is a child of Animal
var d: Animal = new Snake('lala');

// This still works fine
var e: Cat = new Horse('pupu');
var f: Horse = e;

// For explict casting
var g: Animal = new Snake('sisi');
var h: Snake = g; // Error, since g is already type Animal 


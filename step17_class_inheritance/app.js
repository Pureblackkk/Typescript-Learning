class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        console.log(this.name + "moved" + meters + "m");
    }
}
class Snake extends Animal {
    constructor(theName) {
        super(theName);
    }
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
    bite() {
        console.log('Bites');
    }
}
class Horse extends Animal {
    constructor(theName) {
        super(theName);
    }
    move(meters = 45) {
        console.log('Galloping...');
        super.move(meters);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 1) {
        alert("Jumping...");
        super.move(meters);
    }
}
var a = new Cat("mimi");
var a1 = new Animal("mimi");
var b = a;
var c = a;
var d = new Snake('lala');
var e = new Horse('pupu');
var f = e;
var g = new Snake('sisi');
var h = g;
//# sourceMappingURL=app.js.map
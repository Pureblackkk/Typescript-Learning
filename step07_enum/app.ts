// Enums are a special type that has been borrowed from other languages such as C#
enum DoorState {
    Open,
    Closed,
    Ajar
}

// This will created a array-like object with key Open, Closed, Ajar and value 1, 2, 3
console.log(DoorState.Open);
console.log(DoorState.Closed);
console.log(DoorState.Ajar);
console.log(DoorState["Open"]);
console.log(DoorState["Closed"]);
console.log(DoorState["Ajar"]);
console.log(DoorState[0]);
console.log(DoorState[1]);
console.log(DoorState[2]);

// Of course you can assign your own value for them  
// Note if we don't assign a value it will not show array-like index key
enum myDoorState {
    Open = "open",
    Closed = "close",
    Ajar = "ajar"
}
console.log(myDoorState.Open);
console.log(myDoorState.Closed);
console.log(myDoorState.Ajar);

// Assign
enum myDoorState2 {
    Open = 4,
    Closed = 5,
    Ajar = 6
}
console.log(myDoorState2.Open);
console.log(myDoorState2.Closed);
console.log(myDoorState2.Ajar);

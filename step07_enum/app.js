var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
console.log(DoorState.Open);
console.log(DoorState.Closed);
console.log(DoorState.Ajar);
console.log(DoorState["Open"]);
console.log(DoorState["Closed"]);
console.log(DoorState["Ajar"]);
console.log(DoorState[0]);
console.log(DoorState[1]);
console.log(DoorState[2]);
var myDoorState;
(function (myDoorState) {
    myDoorState["Open"] = "open";
    myDoorState["Closed"] = "close";
    myDoorState["Ajar"] = "ajar";
})(myDoorState || (myDoorState = {}));
console.log(myDoorState.Open);
console.log(myDoorState.Closed);
console.log(myDoorState.Ajar);
var myDoorState2;
(function (myDoorState2) {
    myDoorState2[myDoorState2["Open"] = 4] = "Open";
    myDoorState2[myDoorState2["Closed"] = 5] = "Closed";
    myDoorState2[myDoorState2["Ajar"] = 6] = "Ajar";
})(myDoorState2 || (myDoorState2 = {}));
console.log(myDoorState2.Open);
console.log(myDoorState2.Closed);
console.log(myDoorState2.Ajar);
//# sourceMappingURL=app.js.map
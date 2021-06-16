const enum DoorStateConst {
    Open,
    Closed,
    Ajar
}

// These types of enums have been introduced largely for performance reasons
// If we call its Open like this 
// The compiled js directly call 0 rather than DoorStateConst.Open
console.log(DoorStateConst.Open);

// Apart from that 
// We can not directly call its key using index
console.log(DoorStateConst[0]) // Error
console.log(DoorStateConst['Open']) // Work fine 

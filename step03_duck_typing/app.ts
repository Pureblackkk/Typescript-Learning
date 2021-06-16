//TypeScript uses what the specification calls “structural subtyping” to determine compatibility. 
//This is similar to what’s often called “duck typing.” 
let myType = {name: "zed", id: 1};

// Case 1
myType = {id: 2, name: "Tommy"}; // Works fine 

// Case 2-a
myType = {id: 3, name_person: "Bruce"} // Error, since no name_person key when defined it 

// Case 2-b
// A type can include an index signature to explicitly indicate that excess properties are permitted in when fresh object 
let newType : {id : number, [x : string] : any}
newType = {id: 4, random_name: "lalala"}
newType = {id: 4, random_name2: 123}

// Case 3 
myType = {name: "Tommy", id: 123, phone: 123}; // Error, excess property

// Case 4 
// When other existed object asign to it 
let overType = {name: "pupu", id: 2};

// Case 4-a
myType = overType // Work fine 

// Case 4-b
let overType2 = {name: "pupu", phone: 123}
myType = overType2; // Error, no id 

// Case 4-c
let overType3 = {name: "pupu", id: 5, phone: 123}
myType = overType3; // Work fine, this is different with case 3 when just refresh






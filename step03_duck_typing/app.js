let myType = { name: "zed", id: 1 };
myType = { id: 2, name: "Tommy" };
myType = { id: 3, name_person: "Bruce" };
let newType;
newType = { id: 4, random_name: "lalala" };
newType = { id: 4, random_name2: 123 };
myType = { name: "Tommy", id: 123, phone: 123 };
let overType = { name: "pupu", id: 2 };
myType = overType;
let overType2 = { name: "pupu", phone: 123 };
myType = overType2;
let overType3 = { name: "pupu", id: 5, phone: 123 };
myType = overType3;
//# sourceMappingURL=app.js.map
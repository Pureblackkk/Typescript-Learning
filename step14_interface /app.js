var complexType = {
    id: 1,
    name: 'lala'
};
var complexType2 = {
    id: 2,
    phone: 1234
};
class ComplexType {
    print() {
        return "id:" + this.id + " name:" + this.name;
    }
}
var complexType3 = new ComplexType();
console.log(complexType3.id);
console.log(complexType3.name);
//# sourceMappingURL=app.js.map
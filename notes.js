// Typescript notes
// Defining variables
var newStr;
newStr = "Hello";
var newArr;
var c = 2 /* Color.Blue */;
// Tuples
var swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
// defines parameter data types and return value data type
swapNums = swapNumbers(1, 2);
// Any
var craziness;
// Optional Parameters
function multNumbers(num1, num2, num3) {
    return num1 * num2;
}
// Required paramters
function subNumbers(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 - num2 - num3;
}
// Rest parameters
function addNumbers(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (a, b) { return a + b; }, 0);
}
// Generics 
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5]);
var badGuy = { id: 3, name: "Mojo", motive: "bad" };
console.log('====================================');
console.log(badGuy);
console.log('====================================');
var Employee = /** @class */ (function () {
    function Employee(id, name, friend) {
        this.id = id;
        this.name = name;
        this.friend = friend;
    }
    Employee.getRandomInfo = function () {
        return "cat";
    };
    Object.defineProperty(Employee.prototype, "empId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
            // this.#id = id
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var kayvon = new Employee(1, "Kayvon", { id: 2, name: "Gert", age: 35 });
console.log(kayvon);
console.log(kayvon.getName());
// private or protected
// protected can be extended

// Typescript notes


// Defining variables


let newStr: string;

newStr = "Hello";

let newArr: string[];

// OR

// let newArr = Aray<string>   (generics)


// Enums

const enum Color {
    Red,
    Color,
    Blue
}

let c: Color = Color.Blue;

// Tuples

let swapNums: [firstNum: number, secondNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}


// defines parameter data types and return value data type


swapNums = swapNumbers(1, 2)

// Any

let craziness: any;



// Optional Parameters

function multNumbers(num1: number, num2: number, num3?: number): number {
    return num1 * num2
}

// Required paramters

function subNumbers(num1: number, num2: number, num3 = 10): number {
    return num1 - num2 - num3
}

// Rest parameters

function addNumbers(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}

// Generics 

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);
// let concatResult = getItems<number>([1, 2, 3, 4, 5]);

// let concatResult = getItems([1, 2, 3, 4, 5]);


// Classes



interface Friend {
    id: number
    name: string
    age?: number


}


interface Enemy extends Friend {
motive: string
}


let badGuy: Enemy = {id: 3, name: "Mojo", motive: "bad"}

console.log('====================================');
console.log(badGuy);
console.log('====================================');


class Employee {
    id!: number;

    name!: string;

    friend: Friend





static getRandomInfo(): any {
    return "cat"
}

get empId() : number {
    return this.id
}

set empId(id: number) {
    this.id = id
    // this.#id = id
}
    constructor(id: number, name: string, friend: Friend) {
        this.id = id;
        this.name = name;
        this.friend = friend
    }
getName() :string {
    return this.name
}

}


let kayvon = new Employee(1, "Kayvon", {id: 2, name: "Gert", age: 35 });

console.log(kayvon);
console.log(kayvon.getName());


// private or protected

// protected can be extended



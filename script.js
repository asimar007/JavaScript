//? Higher Order fucntion or first-class functions

//Example-1
function abcd(val) {
    // Body
}
abcd(function () { })

//Example-2
function higherOrderFunction() {
    return function innerFunction() {
        // Inner function logic
    }
}
higherOrderFunction();

// Example-3
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (val) {
    console.log(val);
})

// forEach, Map, Filter, Reduce are higher order functions

//? Constructor Function

//Example-1
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person('Asim', 25);
let person2 = new Person('Noim', 30);

//? First-Class Function

//Example-1
const abc = function () {
    //Body
}
//console.log(first);

//? new Keyword

//Example-1
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person3 = new Person('Asim', 25);

// how under the hood works
/*
Imagine empty/blank object 

{
name: 'Asim',
age: 25
}
*/

//? iife (Immediately Invoked Function Expression)

//Example-1
(function () {
    console.log("Hello 1")
})();

//Example-2
// Arrow function iife

(() => {
    console.log("Hello 2")
})();

/*
When we use IIFE function and init value we declare that by default Private.

So How can we access the private value? 

For that we use getter and setter method to access that Private variable
*/

// Example-3
let name = (function () {
    let myName = "Asim";
    return {
        getName: function () {
            return myName;
        },
        setName: function (name1) {
            return myName = name1;
        }
    }
})();

//console.log(name.setName("Bal"));

//? Prototype Inheritance

// Example-1
let human = {
    canTalk: true,
    canFly: false,
    canWalk: true,
    haveEmotion: true,
}

let asim = {
    canSing: true,
    canDance: true,
    canLove: false,
}
asim.__proto__ = human;

//? 'this' keyword

//Example 1. Global Context

// In the browser, this refers to the window object.
//console.log(this); // Window
// In Node.js, this refers to an empty object {} in a module (not global).
//console.log(this); // {}

//Example- 2. Inside a Function

/*
Non-strict mode: this refers to the window object (browser) or global (Node.js).

Strict mode ('use strict'): this is undefined.
*/
function show() {
    //console.log(this);
}
show(); // window


// "use strict";
function show() {
    //console.log(this);
}
show(); // undefined

// Example- 3. Inside an Object Method

//When used inside an object method, this refers to the object itself.
const user = {
    name: "Asim",
    show: function () {
        //console.log(this);
    }
}
user.show(); // object

// Example- 4. addEventListener

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this); // Always refer to the element that fired the event. This case button element
//     this.style.color = 'red';
// })

//? Call 

//Example-1
function test() {
    console.log(this);
}
let obj = {
    age: 25,
}

test.call(obj);

// Example-2

function setUsername(username) {
    this.username = username;
    console.log("Test1");
}
function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}
let user1 = new createUser("asimar007", "fb@gmail.com", "12345");
console.log(user1);
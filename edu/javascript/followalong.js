let name = "Name"; // Variable to store a name.

const age = 30; // Constant to store an age


// Control Flow Statements
if (condition) {
    // Code Line
} else {
    // Code Line
}


// Functions
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("You"); // Output: Hello, You!


// Setting variable with 'let'
let message = "Hello, world!";
console.log(message);


const myElement = document.querySelector('.my-class'); // Selects the first element with class "my-class"

const myLink = document.querySelector('nav a'); // Selects the first link inside a <nav> element

const allLinks = document.querySelectorAll('a'); //Selects all <a> elements on the page

// What has been covered so far:

// variables and data types
// variables: let & const
// data types: string, number, boolean
// control flow: if/else statements
// functions: functions(reusable blocks of code)
// DOM Manipulation(Document Object Model)

// Next Steps:

// arrays and objects

// Arrays: Ordered collections of values.
const fruits = ["apple", "banana", "cherry"];

// Objects: Unordered collections of key-value pairs.
const person = {
        name: "Alice",
        age: 30,
        city: "New York"
};

// for Loop: Repeats a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
        console.log(i);
}

// while Loop: Repeats a block of code while a condition is true.
let i -0;
while (i < 5) {
        console.log(i);
        i++;
}

// Event Listeners: Respond to user interactions (eg., clicks, key presses).
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
        console.log("Button clicked!");
});

// Asynchronous JavaScript
// promises: Handle asynchronous operations (e.g., fetching data from a server).
// Async/Await: A cleaner way to work with asynchronous code.

// Advanced Topics

// Basic JavaScript Problems
// Pulled from Gemini AI Advanced 
// v. 1.5 Pro with Deep Research

// Problem 1: Array Manipulation

   // Create an array of your favorite movies.
    // Access and log the second movie in the array.
    
    // -- 1. Array Indexing: In JavaScript, arrarys are zero-indexed, meaning the first element is at index 0, the second is at index 1, and so on.
    // -- 2. Accessing and Element: To access a specific element, you use square brackets [] and the index of the desired element.
    // -- 3. Logging the Element: The console.log() function is used to print the value of the secondMovie variable to the console.
    
    // Add a new movie to the end of the array.
    // Remove the first movie from the array.
    
    // Find the length of the array. (look to output: 3)
    // -- 1. movies.length: this property directly gives you the number of elements in the movie array.
    // -- 2. console.log(arrayLength): this line prints the value of arrayLength to the console.
    
const movies = [
        "Knives Out",
        "Mission: Impossible - Fallout",
        "Arrival"
];
// Array Length Output
const arrayLength = movies.length;
console.log(arrayLength); // Output: 3

// Array Index
const secondMovie = movies[1];
console.log(secondMovie);



// Problem 2: Object Practice

   // Create an object representing a person with properties for name, age, and city. line 38-42
   
   // Access and log the person's age. line 43-44
   // -- 1. Accesssing a Property: To access a property of an object, you use dot notation. In this case, person.age accesses the age property of the person object.
   // -- 2. Storing the Value: The accessed value is stored in the personAge variable.
   // -- 3. Logging the Value: The console.log() function is used to print the value of personAge to the console.
   
   // Add a new property to the object called occupation.
   // Change the person's city.

const person = {
        name: "Chasen",
        age: 24,
        city: "Fort Wayne",
        occupation: "Founder"
}
const personAge = person.age;
console.log(personAge); // Output 24


// Problem 3: Conditional Statements

    // Write a program that checks if a number is even or odd. line
    // -- 1. isEven function | 
    // -- 2. Takes a number as input
    // -- 3. Uses the modulo operator (%) to check if the number is divisible by 2.
    // -- 4. If the remainder is 0, the number is even, and the function returns true.
    // -- 5. otherwise, the number is odd, and the function returns false.
    // --2.1. Checking the Number:
    // -- 2.2. A number to check, numberToCheck, is defined.
    // --  2.3. The isEven function is called with numberToCheck, is defined.
    // --   2.4. The result is used in an if/else statement to print the appropiate message.
    
    // Create a program that determines if a person is eligible to vote based on their age.
    // --1. isEligibleToVote function |
    // -- 2. Takes an age as input
    // -- 3. Checks if the age is greater than or equal to 18.
    // -- 4. Returns true if eligible, false otherwise.
    // -- 2.1. Checking Eligibility:
    // -- 2.2. A personAge variable is defined with a specific age.
    // -- 2.3. The isEligibleToVote function is called with personAge as the argument.
    // -- 2.4. The result is used in an if/else statement to print the appropriate message.
    
    // Write a program that calculates the discount for a product based on the quantity purchased.

function isEven(number) {
    if (number % 2 === 0) {
        return true;
        } else {
          return false;
     }
}

const numberToCheck = 10;
if (isEven(numberToCheck)) {
    console.log(numberToCheck + " is even.");
    } else {
      console.log(numberToCheck + " is odd.");
}

function isEligibleToVote(age) {
    if (age >= 18) {
    return true;
 }  else {
    return false;
  }
}
// Alternative Examples Copied From Gemini AI
// Driving Age
function isEligibleToDrive(age) {
  // Adjust the age limit as needed
  return age >= 16;
}
// Retirement Age
function isEligibleForRetirement(age) {
  // Adjust the retirement age as needed
  return age >= 65;
}
const personAge = 24; // Replace with the actual age

if (isEligibleToVote(personAge)) {
    console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote yet.");
}

function calculateDiscount(quantity, price) {
    let discount = 0;
    
    if (quantity >= 11) {
        discount = 0.2; // 20% discount
    } else if (quantity >= 6) {
        discount = 0.1; // 10% discount
}
    return price * quantity * (1 - discount);
}

const productPrice = 10;
const quantityPurchased = 15;

const finalPrice = calculateDiscount(quantityPurchased, productPrice);
console.log("Final price:", finalPrice);

Problem 4: Loops

    Write a program to print numbers from 1 to 10 using a for loop.
    Create a program to calculate the factorial of a number using a while loop.
    Write a program to find the sum of all even numbers between 1 and 20.

Problem 5: Functions

    Create a function to calculate the area of a circle.
    Write a function to check if a string is a palindrome.
    Create a function to generate a random number between 1 and 100

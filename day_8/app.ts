//Question number 22
// If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log("\nQuestion number 22");
//Creating array
let new_array:string[]=["Areesha","Areeba","Ayesha","Anila"];

//Producing Error ! by Accessing invalid index of array.
console.log(new_array[4]);

// Make sure you correct the error before closing the program.
//Correct the error
console.log(new_array);

//Question number 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("\nQuestion number 23");
// Write a series of conditional tests.
//Creating car variable
let car: string = "sabaru";

//Use comparison Operator
console.log("\nIs car === 'sabaru'? I predict True");
console.log(car === "sabaru");

console.log("\nIs car == 'sabaru'? I predict True");
console.log(car == "sabaru");

console.log("\nIs car !== 'sabaru'? I predict True");
console.log(car !== "honda");

console.log("\nIs car != 'sabaru'? I predict True");
console.log(car != "honda");

console.log("\nIs car !== 'civic'? I predict True");
console.log(car !== "civic");

//False
console.log("\nIs car.lowerCase == 'SABARU'? I predict False");
console.log(car.toLocaleLowerCase() == "civic");

console.log("\nIs car != 'sabaru'? I predict False");
console.log(car != "sabaru");

console.log("\nIs car !== 'sabaru'? I predict False");
console.log(car !== "sabaru");

console.log("\nIs car == 'sabaru'? I predict False");
console.log(car == "honda");

console.log("\nIs car == 'Train'? I predict False");
console.log(car == "Train");

//Question number 24
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

console.log("\nQuestion number 24");
//Tests for equality and inequality with strings
let apple: string = "apple";
console.log("\nIs apple is equal to apple");
console.log(apple === "apple"); //true

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple"); //false

//Tests using the lowercase function
let uppercaseApple = "APPLE";
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple"); //true

console.log("\nAPPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple"); //false

//Numerical tests
let ten = 10;
let twenty = 20;

//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty); //False

//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty); //True

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0); //True

//Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10); //False

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5); //true

//Less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10); //false

//Tests using "and" and "or" operators
//Using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); //true
console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30); //false

//Using || (OR)
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20); //true
console.log("\n20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20); //false

// Test whether an item is in a array
let fruits: string[] = ["Mango", "Banana", "Orange"];
console.log("\nIs Orange include in my fruits array");
console.log(fruits.includes("Orange")); //true
console.log("\nIs Orange not include in my fruits array");
console.log(!fruits.includes("Orange")); //false

//Question number 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

console.log("\nQuestion number 28");
let age: number = 25;
if (age < 2) {
  console.log("Person is a Baby");
} else if (age >= 2 && age < 4) {
  console.log("Person is a Toddler");
} else if (age >= 4 && age < 13) {
  console.log("Person is a Kid.");
} else if (age >= 13 && age < 20) {
  console.log("Person is a Teenager.");
} else if (age >= 20 && age < 65) {
  console.log("Person is an Adult.");
} else {
  console.log("Person is an Elder");
}

//Question number 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

console.log("\nQuestion number 29");
let favorite_fruits:string[]= ["Apple","Banana","Mango"];

if(favorite_fruits.includes("Apple")){
    console.log("I really like Apple!");
}
if(favorite_fruits.includes("Banana")){
    console.log("I really like Banana!");
}
if(favorite_fruits.includes("Mango")){
    console.log("I really like Mango!");
}
if(favorite_fruits.includes("Orange")){
    console.log("I really like Orange!");    
}
if(favorite_fruits.includes("Strawberry")){
    console.log("I really like Strawberries!");
}    

//Question number 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

console.log("\nQuestion number 30");
let users:string[]= ["Admin","Eric","Areesha","Iqbal","Shahana"];

users.forEach(user => {
    if(user === "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else {
        console.log(`Hello ${user}, thank you for logging in again`)
    }
})

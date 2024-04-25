//Question number 34
//Pizzas: Share your favorite pizzas and express your love for them.

let favorite_pizzas: string[] = ["Pepperoni", "Afghani", "Fajita"];

//For loop
for(let pizza of favorite_pizzas){
  console.log(`I like ${pizza} pizza.`);
}
//Print a message outside of the for loop
console.log("I really love pizza!");

//Question number 35
//Animals: Highlight animals with a common trait.

let animals:string[]= ["Cat","Dog","Rabbit"];

//For loop print each animals name
for(let animal of animals){
    console.log(animal);
}
//Print a statement about each animal
for(let animal of animals){
    console.log(`A ${animal} can be a good pet.`);
}
//expressing a general thought about pets
console.log("\nAll of these animals can make great pets with the right care.");

//Question number 36
//T-Shirt: Create a function for customizing t-shirts.

//Write a function
function make_shirt(size:string, text:string){
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}

//Call the function
make_shirt("Large","Hello world");
make_shirt("Medium","Hello world");
make_shirt("Small","Hello world");

//Question number 34
//Pizzas: Share your favorite pizzas and express your love for them.
var favorite_pizzas = ["Pepperoni", "Afghani", "Fajita"];
//For loop
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
//Print a message outside of the for loop
console.log("I really love pizza!");
//Question number 35
//Animals: Highlight animals with a common trait.
var animals = ["Cat", "Dog", "Rabbit"];
//For loop print each animals name
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var animal = animals_1[_a];
    console.log(animal);
}
//Print a statement about each animal
for (var _b = 0, animals_2 = animals; _b < animals_2.length; _b++) {
    var animal = animals_2[_b];
    console.log("A ".concat(animal, " can be a good pet."));
}
//expressing a general thought about pets
console.log("\nAll of these animals can make great pets with the right care.");
//Question number 36
//T-Shirt: Create a function for customizing t-shirts.
//Write a function
function make_shirt(size, text) {
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
//Call the function
make_shirt("Large", "Hello world");
make_shirt("Medium", "Hello world");
make_shirt("Small", "Hello world");

//Question number 43
//Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

//Create an Array
let magicianNames: string[] = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];

//A function that creates a copy of an array
function copyArray(arr:string[]){
 return [...arr]
}
let copyMagicianArray = copyArray(magicianNames)

//Function with out great
function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//To show names with out great
console.log("(Original Array) Magicians name:");
show_magicians(magicianNames);

//function for adding Great in names
function make_great(magicians: string[]) {
  magicians.forEach((name) => console.log(`The Great ${name}`));
}

//Show magician names with "The Great" added
console.log('\n(Copy Array) Magicians name with "The Great:"');
make_great(copyMagicianArray);

//Question number 44
//Sandwiches: Summarize sandwich orders with varying ingredients.

//Define a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich(...items: string[]){
    console.log("\nMaking your sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich !\n");
}

//Call the function 3 times using a different number of arguments
make_sandwich("Chicken","Egg","Cheese");
make_sandwich("Beef","Lettuce","Tomato","Butter");
make_sandwich("Bread","Chicken","Butter","Mayo");

//Question number 45
//Cars: Create detailed car objects with flexible properties.

//Define a function to create a car object with optional options..
function createCar(manufacturer:string, modelName:string, ...extraOptions:{[key:string]: any}[]):Object{
  const myCar ={
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOptions)
  }
  return myCar;
}

//Call the function to create a car object
let answer = createCar("Toyota","Corolla",{color:"Black"},{features:["Power window","Sunroof"]});

//Print the car object
console.log(answer);
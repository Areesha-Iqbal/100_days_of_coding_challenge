//Question number 43
//Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Create an Array
var magicianNames = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
//A function that creates a copy of an array
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
var copyMagicianArray = copyArray(magicianNames);
//Function with out great
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//To show names with out great
console.log("(Original Array) Magicians name:");
show_magicians(magicianNames);
//function for adding Great in names
function make_great(magicians) {
    magicians.forEach(function (name) { return console.log("The Great ".concat(name)); });
}
//Show magician names with "The Great" added
console.log('\n(Copy Array) Magicians name with "The Great:"');
make_great(copyMagicianArray);
//Question number 44
//Sandwiches: Summarize sandwich orders with varying ingredients.
//Define a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking your sandwich with:");
    items.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich !\n");
}
//Call the function 3 times using a different number of arguments
make_sandwich("Chicken", "Egg", "Cheese");
make_sandwich("Beef", "Lettuce", "Tomato", "Butter");
make_sandwich("Bread", "Chicken", "Butter", "Mayo");
//Question number 45
//Cars: Create detailed car objects with flexible properties.
//Define a function to create a car object with optional options..
function createCar(manufacturer, modelName) {
    var extraOptions = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraOptions[_i - 2] = arguments[_i];
    }
    var myCar = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign.apply(Object, __spreadArray([{}], extraOptions, false)));
    return myCar;
}
//Call the function to create a car object
var answer = createCar("Toyota", "Corolla", { color: "Black" }, { features: ["Power window", "Sunroof"] });
//Print the car object
console.log(answer);

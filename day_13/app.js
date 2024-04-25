//Question number 37
//Large Shirts: Default values in make_shirt().
//Making a function
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
//Calling a function with by default values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
//Calling a function now with Small size and also different message
make_shirt("Small", "I Love Python");
//Question number 38
//Cities: Describing cities with a function.
//Create a function
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
//Calling a function
describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("Paris", "France");
//Question number 39
//City Names: Formatting city-country pairs.
//Calling a function with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
//Calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

//Question number 37
//Large Shirts: Default values in make_shirt().

//Making a function
function make_shirt(
    size: string = "Large",
    text: string = "I Love Typescript"
  ) {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
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
function describe_city(city:string, country:string= 'Pakistan'){
    console.log(`${city} is in ${country}`);
}
//Calling a function
describe_city("Karachi");
describe_city("Tokyo","Japan");
describe_city("Paris","France");

 //Question number 39
 //City Names: Formatting city-country pairs.

 //Calling a function with parameters which return a values in string
function city_country(city: string, country: string): string {
  return `${city} , ${country}`;
}
//Calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

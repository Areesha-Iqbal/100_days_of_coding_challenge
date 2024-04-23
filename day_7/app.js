//Question number 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guest_list = ["Ayesha,", "Samra,", "Anam,"];
// for (let i = 0; i < guest_list.length; i++) {
//   console.log("\nDear " + guest_list[i]+ " You are invited to the dinner.");
// }
var lengthGuests = guest_list.length;
console.log("We are Inviting total ".concat(lengthGuests, " Guests"));
//Question number 20
//Think of something you could store in a array.
var languages = ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi"];
// Write a program that creates a list containing these items.
console.log("List of Languages:");
languages.forEach(function (language) { return console.log(language); });
// Person Object
var person = {
    name: "Areesha",
    age: 20,
    student: true,
};
console.log(person);

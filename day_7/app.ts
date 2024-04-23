//Question number 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list: string[] = ["Ayesha,", "Samra,", "Anam,"];

// for (let i = 0; i < guest_list.length; i++) {
//   console.log("\nDear " + guest_list[i]+ " You are invited to the dinner.");
// }

let lengthGuests: number = guest_list.length;

console.log(`We are Inviting total ${lengthGuests} Guests`);

//Question number 20
//Think of something you could store in a array.
let languages: string[] = ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi"];

// Write a program that creates a list containing these items.
console.log("List of Languages:");
languages.forEach(language => console.log(language));

//Question number 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface person {
    name: string,
    age: number,
    student: boolean
}

// Person Object
let person :person= {
    name : "Areesha",
    age : 20,
    student : true,
}
console.log(person);


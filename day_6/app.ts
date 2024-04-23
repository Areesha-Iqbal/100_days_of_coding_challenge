//Question number 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList1: string[] = ["Anila,", "Samra,", "Anam,"];

for (let i = 0; i < guestList1.length; i++) {
  console.log(
    "\nDear " +
      guestList1[i] +
      " You are invited to the dinner."
  );
}

console.log("\nGood News! We find Big Table so we are inviting 3 more guests.");

//Add one guest to the beginning
guestList1.unshift("Alisha,");
//Add one guest to the middle
guestList1.splice(2, 0, "Hamna,");
//Add one guest to the end
guestList1.push("Iqra,");

for (let i = 0; i < guestList1.length; i++) {
  console.log(
    "\nDear " +
      guestList1[i] +
      " You are invited to the dinner."
  );
}

//Question number 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Array of guest list
let guestList: string[] = ["Ayesha,", "Samra,", "Anam,"];

//1 guest cannot come, invite someone else in her place
let absent_Guest: string = "Ayesha";
let new_Guest: string = "Anila";
guestList[0] = new_Guest;

//Ayesha did not come to dinner
//console.log(`\nMiss ${absent_Guest} is not coming to the dinner.`);

//We have big table arrangement so we are inviting 3 more guests.
console.log("\nGood News! We find Big Table so we are inviting 3 more guests.");

//Add one guest to the beginning
guestList.unshift("Alisha");
//Add one guest to the middle
guestList.splice(2, 0, "Hamna");
//Add one guest to the end
guestList.push("Iqra");

//Printing an invitation message to each guests
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      " You are invited to the dinner."
  );
}

//We could not arrange the big table, there is only capacity for 2 guests
console.log(
  "\nSorry.. We can not arrange a big table, only 2 peoples will be invited."
);

//Using while-loop to remove guests from the array until only two names remain 
while (guestList.length > 2) {
  let remove_guest = guestList.pop();
  console.log(`Dear ${remove_guest}, You are not invited for Dinner.`);
}

//Inviting 2 guests.
console.log("\nInvitations to the last 2 Guest");

//Sending ainvitations to the last two guest on the list 
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " + guestList[i] + " You are still invited."
  );
}
//Remove last two Guest from the list
guestList.splice(0, 2);
console.log("\nEmpty list", guestList);

console.log("\n");

//Question number 18
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places: string[] = ["Karachi", "Lahore", "Brazil", "Zoo", "Afghanistan"];

// • Print your array in its original order.
console.log("Original Order= ", places);

// // • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order= ", [...places].sort());

// // • Show that your array is still in its original order by printing it.
console.log("Still in Original Order= ", places);

// // • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order= ", [...places].reverse());

// // • Show that your array is still in its original order by printing it again.
console.log("Still in Original Order= ", places);

// // • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original array Reversed = ", places.reverse());

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original Order = ", places.reverse());

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetical Order = ", places.sort());

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original array Reversed again = ", places.sort().reverse());

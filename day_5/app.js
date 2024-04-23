//Question number 13
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport = ["Car", "Motorcycle", "Cycle", "Train"];
for (var i = 0; i < transport.length; i++) {
    console.log("I would like to own a " + transport[i]);
}
//Question number 14
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list1 = ["Ayesha,", "Samra,", "Anam,"];
for (var i = 0; i < guest_list1.length; i++) {
    console.log("\nDear " + guest_list1[i] + " You are invited to the dinner.");
}
//Question number 15
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var guest_list = ["Ayesha,", "Samra,", "Anam,"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear " +
        guest_list[i] +
        "\nYou are invited to the dinner.");
}
var absent_Guest = "Ayesha";
var new_Guest = "Anila";
guest_list[0] = new_Guest;
console.log("\nMiss ".concat(absent_Guest, " is not coming to the dinner."));
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear " +
        guest_list[i] +
        "\nYou are still invited to the dinner.");
}

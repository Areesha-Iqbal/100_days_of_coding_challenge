//Question number 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log("\nQuestion number 25");
var alien_color1 = "Green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color1 === "Green") {
    console.log("You earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. 
alien_color1 = "Yellow";
//(The version that fails will have no output.)
if (alien_color1 === "Green") {
    console.log("You earned 5 points"); //no output
}
//Question number 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25 and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\nQuestion number 26");
//This version runs the if block
var alien_color2 = "Green";
if (alien_color2 === "Green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
//Second version
//This version runs the Else block
alien_color2 = "Yellow";
if (alien_color2 === "Green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
//Question number 27        
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\nQuestion number 27");
//Define Variable
var alien_color3 = "Green";
if (alien_color3 === "Green") {
    console.log("Player earned 5 points.");
}
else if (alien_color3 === "Yellow") {
    console.log("Player earned 10 points.");
}
else if (alien_color3 === "Red") {
    console.log("Player earned 15 points.");
}
//Version 2
alien_color3 = "Yellow";
if (alien_color3 === "Green") {
    console.log("Player earned 5 points.");
}
else if (alien_color3 === "Yellow") {
    console.log("Player earned 10 points.");
}
else if (alien_color3 === "Red") {
    console.log("Player earned 15 points.");
}
//Version 3
alien_color3 = "Red";
if (alien_color3 === "Green") {
    console.log("Player earned 5 points.");
}
else if (alien_color3 === "Yellow") {
    console.log("Player earned 10 points.");
}
else if (alien_color3 === "Red") {
    console.log("Player earned 15 points.");
}

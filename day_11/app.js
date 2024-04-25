//Question number 31
//No Users: Ensure your user list isn’t empty.
var users = ["Admin", "Eric", "Areesha", "Iqbal", "Shahana"];
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    });
}
//Question number 32
//Checking Usernames: Ensure uniqueness in usernames.
//Array of current users
var current_users = ["AreeSha", "Adil", "ALi", "Rabia", "JOHN"];
//Array of new users
var new_users = ["Kashaf", "Areesha", "john", "Zainab", "Ayesha"];
//Loop through new users to check for usernames avalibility
new_users.forEach(function (newAuser) {
    var our_condition = current_users.some(function (currentAuser) { return currentAuser.toLowerCase() === newAuser.toLowerCase(); });
    if (our_condition) {
        console.log("This username ".concat(newAuser, " is already taken! Please write a different username."));
    }
    else {
        console.log("This username ".concat(newAuser, " is available."));
    }
});
//Question number 33
//Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}

//Question number 31
//No Users: Ensure your user list isn’t empty.

let users: string[] = ["Admin", "Eric", "Areesha", "Iqbal", "Shahana"];
users = [];
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  users.forEach(user => {
    if(user === "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else {
        console.log(`Hello ${user}, thank you for logging in again`)
    }
})}

//Question number 32
//Checking Usernames: Ensure uniqueness in usernames.

//Array of current users
let current_users: string[] = ["AreeSha", "Adil", "ALi", "Rabia", "JOHN"];
//Array of new users
let new_users: string[] = ["Kashaf", "Areesha", "john", "Zainab", "Ayesha"];
//Loop through new users to check for usernames avalibility
new_users.forEach((newAuser) => {
  let our_condition = current_users.some(
    currentAuser => currentAuser.toLowerCase() === newAuser.toLowerCase()
  );
  if (our_condition) {
    console.log(`This username ${newAuser} is already taken! Please write a different username.`);
  } else {
    console.log(`This username ${newAuser} is available.`);
  }
});

//Question number 33
//Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
}

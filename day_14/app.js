//Question number 40
//Album: Create objects for music albums.
//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating 3 variables with different values
var album1 = make_album("Bilal", "Redwave");
console.log(album1);
var album2 = make_album("Ali", "Light");
console.log(album2);
var album3 = make_album("Vitel signs", "Hum Tum", 12);
console.log(album3);
//Question number 41
//Magicians: Display magician names from an array.
// Array of magician’s names
var magicians = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
function show_magicians(magicians) {
    magicians.forEach(function (name) {
        console.log(name);
    });
}
//Call the function to show the magician's names
show_magicians(magicians);
//Question number 42
//Great Magicians: Add "the Great" to magician names.
//Create a Array
var magicianNames = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//To show names with out great
console.log("Magicians Name:");
show_magicians(magicianNames);
//Modify the function
//function for adding Great in names
function make_great(magicians) {
    magicians.forEach(function (name) { return console.log("The Great ".concat(name)); });
}
//Show magician names with "The Great" added
console.log("\nGreat Magicians:");
make_great(magicianNames);

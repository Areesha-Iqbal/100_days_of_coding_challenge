//Question number 40
//Album: Create objects for music albums.

//Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = {
      artist: artist_name,
      title: album_title,
    };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  //Calling three functions and creating 3 variables with different values
  let album1 = make_album("Bilal", "Redwave");
  console.log(album1);
  
  const album2 = make_album("Ali", "Light");
  console.log(album2);
  
  const album3 = make_album("Vitel signs", "Hum Tum", 12);
  console.log(album3);
  
//Question number 41
//Magicians: Display magician names from an array.

// Array of magician’s names
let magicians: string[] = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => {
    console.log(name);
  });
}
//Call the function to show the magician's names
show_magicians(magicians);

//Question number 42
//Great Magicians: Add "the Great" to magician names.

//Create a Array
let magicianNames: string[] = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];

function showMagicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//To show names with out great
console.log("Magicians Name:");
show_magicians(magicianNames);

//Modify the function
//function for adding Great in names
function make_great(magicians: string[]) {
  magicians.forEach((name) => console.log(`The Great ${name}`));
}

//Show magician names with "The Great" added
console.log("\nGreat Magicians:");
make_great(magicianNames);

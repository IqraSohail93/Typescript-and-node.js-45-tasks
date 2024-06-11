"use strict";
// Task 40
function make_Album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_Album("Ed Sheeran", "Shape of You");
let album2 = make_Album("Taylor Swift", "Fearless");
let album3 = make_Album("Dua Lipa", "Cold Heart");
console.log(album1);
console.log(album2);
console.log(album3);
// adding three more tracks with number of tracks
function make_Album2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let album4 = make_Album2("Adele", "Easy On Me", 34);
let album5 = make_Album2("Justin Bieber", "Baby", 43);
let album6 = make_Album2("Bruno Mars", "Just the Way You Are", 12);
console.log(album4);
console.log(album5);
console.log(album6);

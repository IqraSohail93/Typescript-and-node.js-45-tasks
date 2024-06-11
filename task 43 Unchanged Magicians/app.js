"use strict";
//Task 43
let magicians = ["Micheal", "Tina ", "Charles"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
let magicians2 = ["Micheal", "Tina ", "Charles"];
let greatMagicians = make_great([...magicians]);
show_magicians(magicians);
console.log("\n");
show_magicians(greatMagicians);

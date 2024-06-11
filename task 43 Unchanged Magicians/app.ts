//Task 43
let magicians: string []= ["Micheal" , "Tina " , "Charles"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

let magicians2: string []= ["Micheal" , "Tina " , "Charles"];
let greatMagicians: string[] = make_great([...magicians]);
show_magicians(magicians);
console.log("\n");
show_magicians(greatMagicians);
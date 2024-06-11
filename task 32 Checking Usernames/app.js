"use strict";
//Task 32
let current_user = ["Iqra", "Sunia", "Ali", "Rubina", "Ibrahim"];
let new_user = ["Ali", "Mubeen", "Iqra", "Sohail", "Nouman"];
new_user.forEach((newUser) => {
    if (current_user.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username `);
    }
    else {
        console.log(`${newUser} is available `);
    }
});

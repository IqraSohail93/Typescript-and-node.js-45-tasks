//Task 32
let current_user : string [] = ["Iqra", "Sunia","Ali","Rubina","Ibrahim"];
let new_user : string [] = ["Ali", "Mubeen", "Iqra", "Sohail", "Nouman" ];

new_user.forEach(( newUser ) => {
    if ( 
        current_user.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
  ) {
    console.log(`${newUser} will need to enter a new username `);
  } else {
    console.log(`${newUser} is available `)
  }
} )

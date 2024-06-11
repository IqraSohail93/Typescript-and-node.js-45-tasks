"use strict";
//Task 37
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Make a ${size} t-shirt with a message "${message}" printed on it.`);
}
make_shirt(); //default message and large size
make_shirt("medium"); //default message , medium size
make_shirt("small", "I love Programming"); //custom message and small size

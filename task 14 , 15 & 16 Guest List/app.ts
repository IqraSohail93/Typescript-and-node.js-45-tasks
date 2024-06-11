//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list: string [] = [`Sadia`,`Munazza`, `Afifa`, `Jennifer`, `Ali`];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Hey ` +  guest_list[i] ,`!` , `\n I would like to invite you for dinner, tomorrow \n\n I'll be waiting for you.\n`);
// }
// task 15
let guest_not_coming : string = `Afifa`;
guest_list[2]= guest_not_coming;
let new_guest : string = `Usama`;
guest_list[2]= new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Hey ` +  guest_list[i] ,`!` , `\n I would like to invite you for dinner, tomorrow \n\n I'll be waiting for you.\n`);
}
//console.log(`${guest_not_coming} will not come tomorrow for dinner.`);
// task 16
guest_list.unshift(`Alisha`, `Arbaz` , `Mubeen`);
for (let i=0; i<guest_list.length; i++){
    console.log(`Hey ` +  guest_list[i] ,`!` , `\n I would like to invite you for dinner, tomorrow \n\n I'll be waiting for you.\n`);
}
export{guest_list};





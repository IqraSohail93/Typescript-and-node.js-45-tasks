// task 17
let guest_list: string [] = [`Sadia`,`Munazza`, `Afifa`, `Jennifer`, `Ali`];
let guest_not_coming : string = `Afifa`;
guest_list[2]= guest_not_coming;
let new_guest : string = `Usama`;
guest_list[2]= new_guest;
guest_list.unshift(`Alisha`, `Arbaz` , `Mubeen`);
console.log(`\nUnfortunately we can not arrange an extra table.Only two persons will be allowed`);
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    console.log(`I am sorry my friend ${remove_guest}.We can not arrange an extra table for you for tomorrow's dinner.`);
}for (let i=0; i<guest_list.length; i++){
    console.log(`Hey ` +  guest_list[i] ,`!` , `\n You are still invited for dinner, tomorrow \n\n I'll be waiting for you.\n`);
}
guest_list.splice(0,2)
console.log(guest_list);

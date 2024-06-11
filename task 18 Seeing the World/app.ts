// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
let places : string [] = [`Makkah`, `Madives`, `Turkey`,`London` ,`Dubai`];
//console.log(`orignal ` + places);
// Print your array in alphabetical order without modifying the actual list.
// Show that your array is still in its original order by printing it.
//console.log(`copy ` + [...places].sort ());
console.log(`orignal ` + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy ` + [...places].sort ().reverse());
//Show that your array is still in its original order by printing it again
console.log(`orignal ` + places.sort());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`orignal ` + places.sort().reverse());


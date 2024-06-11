//Task 33
let myNumber = [1,2,3,4,5,6,7,8,9];
//for  loop
for( let i=0; i < myNumber.length ; i++){
    //now use the condition
    if(myNumber [i] == 1){
        console.log(`${myNumber[i]}st`);
    }else if (myNumber[i] == 2){
        console.log(`${myNumber[i]}nd`);
    }else if (myNumber[i]==3){
        console.log(`${myNumber[i]}rd`);
     }
     else if (myNumber[i] >=4 && myNumber[i] <=9){
        console.log(`${myNumber[i]}th`);
    }
}
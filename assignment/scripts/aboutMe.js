// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Lizzie";
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Quaidoo";
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName; // Question: Why (because numbers and NOT Strings?) in video 3  ; let vehicles = motorcycles + cars; works but here have to create " " for white space
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 10;
// 6 - Console log this sentence, adding in the variables you created above: //NOTE: actual variable name is NOT a string as variable value is a string:
console.log ('My name is '  + fullName   + ', and I think ' + luckyNumber +  ' is a winner!');
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "I like Thai food";
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 2;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
// 11 - Add two pets to your `pets` variable
friendsPets += 2;  // cant do just +   , must do += as in itself Plus value!

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
/*if (conditional){
 code if true ;
}else {    };  OR multiple    else if    before the else*/
if (adventurous = false) {
    console.log("Adventures are great!");
}else{
    console.log("How about we stay home?");
}
// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
luckyNumber = 2;
adventurous = true;
if (luckyNumber === 2 && adventurous === true) {
    console.log("Roll the dice");
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if ( pets >= allowedPets ){
    console.log("I can have more pets");  
}else if (pets === allowedPets){
    console.log("I have enough pets");
}else {
    console.log("Oh no, I have too many pets");
}

// STRETCH GOALS:  (.......HAVING ISSUES WITH THIS.....SEE BOOK & FREECODE......)

// 16 - Make a variable called `mostPets` and a conditional that
//
// correctly checks the `pets` and `friendsPets` variables, and
//
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
//
// console.log `mostPets` after the conditional has run.

let mostPets = 0;

//if (pets <= friendsPets || pets >= friendsPets ){
// ****  Ask how to assign which is higher in a short version. ****
console.log(mostPets);
console.log();


else if (pets < friendsPets)
mostPets
console.log();
console.log();
//console.log(mostPets)
else
console.log()

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
    switch ("switch"){
        case 1: 
        console.log('First is the worst /' if your lucky number is 1');
        break;
        case 2: 
        console.log('Second is the best /' if your lucky number is 2');
        break;
        case 3: 
        console.log('Third is the one with the polka dot dress' if your lucky number is 3);
        break;
        default:
        console.log("Luck is what happens when preparation meets opportunity");    
    }

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
/*if (adventurous = false) {
    console.log("Adventures are great!");
}else{
    console.log("How about we stay home?");
}*/

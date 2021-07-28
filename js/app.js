'use strict'
 
let correctAnswer=0;


function getName() {
let name =prompt("Kindly, what is your name ? ");
alert ("welcome to our website "+name);

return name;
}

function getQuastion1 () {
let choose1=prompt("Do you think I am a man ?  yes-no").toLowerCase();
let correctReply="y";
while (choose1 !== "yes" && choose1 !=='y' && choose1 !=='no' && choose1 !=='n'){
alert("Please enter y-n or yes-no")
choose1=prompt("Do you think I am a man").toLowerCase();

}

if (correctReply===choose1){
alert("you are smart");
//console.log("right answer");
correctAnswer++;
}

else
alert("you are not lucky this time")

}

 function getQuestion2 () {
let choose2=prompt("Do you think  I am engineer ? yes-no").toLowerCase();


while (choose2 !== "yes" && choose2 !=='y' && choose2!=='no' && choose2 !=='n'){
alert("Please enter y-n or yes-no")
 choose2=prompt("Do you think  I am engineer ?").toLowerCase();
}

if (choose2 === "yes" ||choose2==="y"){
//console.log("right answer");

alert("you are very smart ");

correctAnswer++;
}
else{
alert("you are not lucky this time");


//console.log("wrong answer");

}

}


function getQuestion3(){
let choose=prompt("Do you think  I am civil engineer ? yes-no ").toLowerCase();


while (choose !== "yes" && choose !=='y' && choose!=='no' && choose !=='n'){
alert("Please enter y-n or yes-no")
choose =prompt("Do you think  I am civil engineer ? yes-no").toLowerCase();
}
 
if (choose ==="no"||choose ==="n") {
//console.log("right answer");

alert("you are very very smart, I am telecom engineer ");
correctAnswer++;

}
else {
alert("you are not lucky this time, I am telecom engineer");
//console.log("wrong answer");

}

}

function getQuestion4(){

let choose=prompt("Do you think  7 is my fav number ? yes-no").toLowerCase();



while (choose !== "yes" && choose !=='y' && choose!=='no' && choose !=='n'){
alert("Please enter y-n or yes-no")
choose =prompt("Do you think  7 is my fav number ? yes-no").toLowerCase();

}
 if (choose==='y'||choose==='yes') {

alert("you are very smart ");
//console.log("right answer");

correctAnswer++;
}
else{
alert("you are not lucky this time");
//console.log("wrong answer");

}

}

function getQuestion5(){

let choose=prompt("Do you think I am living in Amman ?yes-no ").toLowerCase();
while (choose !== "yes" && choose !=='y' && choose!=='no' && choose !=='n'){
alert("Please enter y-n or yes-no")
choose =prompt("Do you think I am living in Amman ? yes-no").toLowerCase();

}

if (choose==="n"||choose==="no") {
alert("you are very very smart, I am living in irbid ");
correctAnswer++;
//console.log("right answer");


}
else {
alert("you are not lucky this time");
//console.log("wrong answer");

}

}
function getQuestion6(){
let counter=1;
let trueNumber=5;
while (counter <5) {

let guessedNumber=prompt("Try to guess a number between 1-10");

if (trueNumber ==guessedNumber) {
alert("Right guess it is 5");
correctAnswer++;
//console.log("right answer");

break;}

else if (trueNumber <guessedNumber) {
alert("too high");
//console.log("wrong answer");
}
else{
alert ("too low");
//console.log("wrong answer");

counter++;
}

}
if (counter ==5) {
alert("Ther right guess is 5")

}
}

function getQuestion7() {

let possibleChoices=['C','K','M'];

let counter=1;

while(counter<=6){

let Letter=prompt("guess one of the english letters A,B....Z").toLocaleUpperCase();

if (Letter==possibleChoices[0]||Letter==possibleChoices[1]||Letter==possibleChoices[2]) {
alert("right guess the true values are C,K,M ");
correctAnswer++;
//console.log("right answer");

break; }
else {
alert("Try again");

counter++;
//console.log("wrong answer");

}

}

if (counter==7){
alert("The true values are C,K,M ");
}
}

 

getName() ;
getQuastion1 ();

 getQuestion2 ();

 getQuestion3();

  getQuestion4() ;

  getQuestion5();

   getQuestion6();

   getQuestion7();


alert("Thanks for visiting our website "+name+"  Number of correct answers were "+ correctAnswer +"/7") ;

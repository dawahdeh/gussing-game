'use strict'
 
let correctAnswer=0;

let name =prompt("Kindly, what is your name ? ");
alert ("welcom to our website "+name);


let choose1=prompt("Do you think I am a female ? y/n");
choo1="n";

if (choo1.localeCompare(choose1.toLowerCase())==0){
alert("you are smart");
correctAnswer++;

}

else
alert("you are not lucky this time")



let choose2=prompt("Do you think  I am engineer ? y/n");
choo2="y";
if (choo2.localeCompare(choose2.toLowerCase())==0){

alert("you are very smart ");

correctAnswer++;
}
else
alert("you are not lucky this time");


let choose3=prompt("Do you think  I am civil engineer ? y/n");
choo3="n";
if (choo3.localeCompare(choose3.toLowerCase())==0){

alert("you are very very smart,I am telecom engineer ");
correctAnswer++;

}
else
alert("you are not lucky this time, I am telecom engineer");



let choose4=prompt("Do you think  7 is my fav number ?");
choo4="y";
if (choo4.localeCompare(choose4.toLowerCase())==0){

alert("you are very smart ");

correctAnswer++;
}
else
alert("you are not lucky this time");



let choose5=prompt("Do you think I am living in Amman ? y/n");
choo5="n";
if (choo5.localeCompare(choose5.toLowerCase())==0) {
alert("you are very very smart, i am living in irbid ");
correctAnswer++;
}
else
alert("you are not lucky this time");



let counter=1;
trueNumber=5;
while (counter <=4){

let guessedNumber=prompt("try to guess a number between 1-10");

if (trueNumber ==guessedNumber) {
alert("Right guess it is 5");
correctAnswer++;
break;}
else if (trueNumber <guessedNumber)
alert("too high");
else
alert ("too low");

counter++;
}

alert("Ther right guess is 5")



let possibleChoices=['C','K','M'];

counter2=1;

while(counter<=6){

let Letter=prompt("guess one of the english letters A,B....Z").toLocaleUpperCase();

if (Letter==possibleChoices[0]||Letter==possibleChoices[1]||Letter==possibleChoices[2]) {
alert("right guess the true values are C,K,M ");
correctAnswer++;
break; }
else
alert("Try again");

counter++;

}

alert("The true values are C,K,M ");


alert("Thanks for visiting our website "+name+"  Number of correct answers were "+ correctAnswer +"/7")




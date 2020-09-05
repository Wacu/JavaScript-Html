var score=0;
var Answer1= prompt("What is 3 + 3 ?");
Answer1 = parseInt(Answer1);
if (Answer1===6){
	alert("You are right,the answer is " + Answer1);
	score = score + 1;
}
else {
	alert("Incorrect");
	score = score + 0;
}
var Answer2=prompt("What is 5 * 3 ?");
Answer2 = parseInt(Answer2);
if (Answer2===15){
	alert("You are right,the answer is " + Answer2);
	score = score + 1;
}
else {
	alert("Incorrect");
	score = score + 0;	
}

var Answer3=prompt("What is 5 - 3 ?");
Answer3 = parseInt(Answer3);
		
if (Answer3===2){
	alert("You are right,the answer is " + Answer3);
	score = score + 1;
}
else {
	alert("Incorrect");
	score = score + 0;
}


//Did the user pass the test?	
if (score >=2) {
alert("Congratulations! You have passed the test");
}
else{
alert("Sorry, you have failed the test, press by F5 to try again");
}	
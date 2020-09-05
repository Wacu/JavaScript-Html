//var count=0;
//session 1
// while(count <50){
	// count=count+1;
	// var Ran=Math.floor(Math.random()*50) +1;
	// document.write(Ran + " ")
	// }
	
	
	
	//session 2
	
	// var count=0;
	
	// while(secretAnswer !=="2941") {
	// var secretAnswer = prompt("What's the password?");
		// count +=1;
		
		// if(secretAnswer==="2941"){
			
			// document.write("You may enter the house");
		// }
		// if (count==3){
			// document.write("You cannot pass ");	
			// break
		// }
	// }
	
	//session3 
	//Do while loops--runs atleast once even if a condition is not met
	
	// var UserName;
	// do{
		
		// UserName=prompt("What is your name");
	// }
	// while (UserName==null|| UserName>=0);  //i f user selects ok or cancels the prompt or writes a number
	// document.write("Hello "+ UserName +" how can I help you?");
	
	
	
	//session 4
	//for loop 
	// var num=0;
	// for(num=0;num<50;num +=1){
		
		// document.write("Correct number");
	// }
	
	
	
	//Loop Challenge
	//1.User has to guess a ran number generated
	//2.loop should keep prompting until user gets the correct number.
	//3. generate 1-10 to record number of attempts
	//4.print how many attempts to get the correct answer.
	
	
	
	var RanNumber=Math.floor(Math.random()*10)+1;

	for(attempts=0;RanNumber!=Enter;attempts +=1){
		var Enter = prompt("Enter a random number between 1 and 10");
	}
		document.write("<p> You got it right </p>");
		document.write("<p> The answer is " + RanNumber + "</p>");
		document.write("<p> You attempted "+ attempts + " no of times </p>");
		
	
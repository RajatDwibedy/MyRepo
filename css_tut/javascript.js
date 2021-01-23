function ageInDays(){
	var birthyear = prompt('what is your date of birth in dd-mm-yyyy format');
	var mont = [31,28,31,30,31,30,31,31,30,31,30,31];
	var daysage = ((new Date()).getFullYear()-birthyear.split("-")[2]-1)*365;
	for (var i=0; i < (new Date).getMonth()-1; i++){
		daysage=daysage+mont[i];
	}
	daysage+=(new Date().getDate())
	var h1 = document.createElement('h1');
	var textans = document.createTextNode('You are ' + daysage + ' Days old');
	h1.setAttribute('id' , 'ageInDays');
	h1.appendChild(textans);
	document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
	document.getElementById('flex-box-result').removeChild(document.getElementById('ageInDays'))
}

// challange 3
function rpsgame(yourchoice){
	//alert(yourchoice.id);
	var humanchoice, botchoice;
	humanchoice = yourchoice.id;
	botchoice = ['rock', 'paper', 'scissor'][randToRpsInt()];
	//alert(botchoice);
	
	result = decideWinner(humanchoice, botchoice);
	//alert(result);

	message = finalMessage(result);
	rpsFrontEnd(yourchoice.id, botchoice, message);
}

function decideWinner(humanchoice, botchoice) {
	var rpsDatabase = {
		'rock': {'scissor':1, 'rock': 0.5, 'paper':0},
		'paper': {'scissor':0, 'rock': 1, 'paper':0.5},
		'scissor': {'scissor':0.5, 'rock': 0, 'paper':1},
	}
	
	var score = rpsDatabase[humanchoice][botchoice];
	// switch(score){
	// 	case 0 : alert('you lost');
	// 			break;
	// 	case 0.5 : alert('draw');
	// 			break;
	// 	case 1 : alert('you won');
	// 			break;
	// }
	return score;
}
function finalMessage(result) {
	if (result==0){
		return {'message': 'You Lost', 'color': 'red'};
	} else if (result==0.5) {
		return {'message': 'Its a Tie', 'color': 'yellow'};
	} else {
		return {'message': 'You Won', 'color': 'green'};
	}
	
}
 function rpsFrontEnd(yourchoice, botchoice, message) {
	 var imgDatabase = {
		 'rock': document.getElementById('rock').src,
		 'paper': document.getElementById('paper').src,
		 'scissor': document.getElementById('scissor').src
	 };

	 document.getElementById('rock').remove();
	 document.getElementById('paper').remove();
	 document.getElementById('scissor').remove();
	 var humanDiv = document.createElement('div');
	 var botDiv = document.createElement('div');
	 var messageDiv = document.createElement('div');

	 humanDiv.innerHTML = "<img src='" + imgDatabase[yourchoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
	 messageDiv.innerHTML = "<h1 style = 'color: " + message['color'] + "; font-size: 60px; padding: 30px'>" + message['message'] + "</h1>";
	 botDiv.innerHTML = "<img src='" + imgDatabase[botchoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

	 document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	 document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	 document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
 function randToRpsInt(){
	 return Math.floor(Math.random() * 3);
 }
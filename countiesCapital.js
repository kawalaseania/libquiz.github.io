


document.getElementById('title').innerHTML = "County And Capital";



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["<p class='lead'> The capital of Bomi county is</p>", "Tubmanburg", "Voinjama", "Bensonsville", "A"], 
    ["<p class='lead'> Bong County capital city is  </p>", "Ganta", "Gbarnga", "None of these", "B"],
    ["<p class='lead'> Which of the below listed cities is the capital of Gbarpolu?.</p>", "Tubmanburg", "Voinjama", "Bopolu", "C"],
    ["<p class='lead'> Voinjama is to lofa then Grand Bassa is to  </p>", "Buchanan", "Buchanan Street", "Ganta", "A"],
    ["<p class='lead'> Whats Grand Capemount Capital City? </p>", "Robertsport", "Zorzor", "", "A"],
    ["<p class='lead'> Zwedru is the capicity of </p>", "Grand Capemount", "Grand Bassa", "Grand Gedeh", "C"],
    ["<p class='lead'> If youre are from Barclayville, than which county do you come from?</p>", "Grand Kru", "Lofa", "Nimba", "A"],
    ["<p class='lead'> The capital city for lofa is...</p>", "Zorzor", "Foya", "Voinjama", "C"],
    ["<p class='lead'> Which of these is not the name of Margibi's capital city?</p>", "Car City", "Kakata", "Kakaita", "C"],
    ["<p class='lead'> In the list of capitals below, identify Mary Land's capital</p>", "Harper", "Happer", "Harpar", "A"],
    ["<p class='lead'> Bensonville is to which county?</p>", "Lofa County", "Nimba County", "Montserrado County", "C"],
    ["<p class='lead'> The capicity of Nimba county is</p>", "Saniquellie", "Saniquellie", "Sanniquellie", "B"],
    ["<p class='lead'> The capicity of Rivercess county is</p>", "Cesto Town", "Fish Town", "Cestor City", "C"],
    ["<p class='lead'> Correctly pair Fish Town with its county</p>", "Rivercess", "River Gee", "Bensonsville", "B"],
    ["<p class='lead'> Whats sinoe county capital?</p>", "Greensville", "Voinjama", "Greenville", "C"]





];
var i = questions.length, j, temp;
while(--i > 0){
    j = Math.floor(Math.random() * (i+1)); // Get random number ranging between 0 and i
    temp = questions[j];
    questions[j] = questions[i];
    questions[i] = temp;
}


function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	document.getElementById("pints").innerHTML = Math.floor((correct/questions.length)*100)+ " % ";
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		test.innerHTML += "<a class='btn btn-outline-danger btn-lg' href='quizHome.html'> Start Over</a>";
		test.innerHTML += "<a class='btn btn-outline-danger btn-lg' href='home.html'> Go to Home</a>";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];

	test.innerHTML = "<p>"+question+"</p>";
	test.innerHTML += "<input type='radio' name='choices' id='btn1' value='A'><label class='btn-lg btn-danger btn-block' for='btn1'>A ) "+chA+"</label>";
	test.innerHTML += "<input type='radio' name='choices' id='btn2' value='B'> <label class='btn-lg btn-danger btn-block' for='btn2'> B )"+chB+"</label>";
	test.innerHTML += "<input type='radio' name='choices' id='btn3'value='C'> <label class=' btn-lg btn-danger btn-block' for='btn3'> C ) "+chC+"</label>";
	
	test.innerHTML += "<div class='jumbotron'><button class='btn btn-block btn-primary' onclick='checkAnswer()'>Next Question </button> <br><a class='btn btn-danger btn-lg' href='quizHome.html'> Start Over</a> <a class='btn btn-outline-success btn-lg' href='home.html'> Goto Home</a></div>";
	test.innerHTML += "";

}


function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
		document.getElementById('p-report').innerHTML = "You got it right";
		new Audio('sound/pass.mp3').play();
	}else{
		document.getElementById('p-report').innerHTML = "you missed question # "+(pos+1)+". The answer was:"+questions[pos][4];
		new Audio('sound/fail.mp3').play();
	}
	pos++;
	renderQuestion();
}


// var time = 15;

// 	function count(){
// 		document.getElementById('timmer').innerHTML = time;
// 		if (time < 0) {
// 			time = 15;
// 			checkAnswer();
// 		}

// 		time = time-1;
// 	}

// 	setInterval(count, 1000);

window.addEventListener("load", renderQuestion, false);





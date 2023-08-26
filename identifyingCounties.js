


document.getElementById('title').innerHTML = "County And Capital";



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["The County marked 1 is called", "Nimba County", "Bomi County", "Montserrado", "B"],
    ["Bong County is marked with which number?", "Six", "Eight", "Two", "C"],
    ["If 1 is to Bomi County, 2 to Bong county, 3 is to ....", "Lofa", "Capemount", "Gbarpolu", "C"],
    ["which region is Grand Bassa", "Four", "One", "Ten", "A"],
    ["The place on the marked '5' is...", "Montserrado", "Grand Capemount", "Lofa", "B"],
    ["Which number represents Grand Gedeh", "Seven", "Six", "Nine", "B"],
    ["Grand Kru is represent by...", "Seven", "Nine", "three", "A"],
    ["Which county is represented by 8", "Montserrado", "Gbarpolu", "Lofa", "C"],
    ["Margibi is labelled with which number? ", "nine", "Eleven", "Nine", "C"],
    ["Number 10 is in which county?", "Maryland", "Sinoe", "Montserrado", "A"],
    ["Montserrado is assigned to ....", "Two", "One", "Eleven", "A"],
    ["Nimba County has which number...", "Twelve", "Ten", "Eleven", "A"],
    ["Rivercess has which number?", "Three", "Eight", "Five", "B"],
    ["Which county is marked 14?", "River Gee", "Bomi County", "Montserrado", "A"],
    ["I am from the county marked 15. Which county I'm from?", "Guinea", "Sinoe", "Nimba", "B"]

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
	
	test.innerHTML = "<center><img class='img-thumbnail' src='img/loberia.png'></center> <br>";
	test.innerHTML += "<p>"+question+"</p>";
	test.innerHTML += "<input type='radio' name='choices' id='btn1' value='A'><label class='btn-lg btn-danger btn-block' for='btn1'>A ) "+chA+"</label>";
	test.innerHTML += "<input type='radio' name='choices' id='btn2' value='B'> <label class='btn-lg btn-danger btn-block' for='btn2'> B )"+chB+"</label>";
	test.innerHTML += "<input type='radio' name='choices' id='btn3'value='C'> <label class=' btn-lg btn-danger btn-block' for='btn3'> C ) "+chC+"</label>";
	
	test.innerHTML += "<div class='jumbotron'><button class='btn btn-block btn-primary' onclick='checkAnswer()'>Next Question </button> <br><a class='btn btn-danger btn-lg' href='identifyingCounties.html'> Start Over</a> <a class='btn btn-outline-success btn-lg' href='home.html'> Goto Home</a></div>";
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





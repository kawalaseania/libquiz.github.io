


document.getElementById('title').innerHTML = "Counties and their flag";



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["<img src='img/bong.png'>", "Nimba County", "Bong County", "Montserrado", "B"],
    ["<img src='img/capemount.png'>", "Grand capemount", "Lofa", "Montserrado", "A"],
    ["<img src='img/gbarpolu.png'>", "Nimba County", "gbarpolu County", "Montserrado", "B"],
    ["<img src='img/gbassa.png'>", "Nimba County", "Grand Bassa", "Lofa", "B"],
    ["<img src='img/gedeh.png'>", "Nimba County", "Bomi County", "Grand Bassa", "C"],
    ["<img src='img/gkru.png'>", "River Gee", "Grand Kru", "Margibi", "B"],
    ["<img src='img/lofa.png'>", "Lofa", "Bomi County", "Sinoe", "A"],
    ["<img src='img/margibi.png'>", "Lofa", "River Cess", "Margibi", "C"],
    ["<img src='img/mland.png'>", "Maryland", "Grand Bassa", "Montserrado", "C"],
    ["<img src='img/mont.png'>", "Nimba County", "Bomi County", "Montserrado", "C"],
    ["<img src='img/nimba.png'>", "Lofa", "Bomi County", "Nimba", "C"],
    ["<img src='img/rcess.png'>", "River Gee", "River Cess", "None of these", "B"],
    ["<img src='img/rgee.png'>", "Lofa", "River Gee", "Montserrado", "B"],
    ["<img src='img/sinoe.png'>", "Sinoe", "Bomi County", "Maryland", "A"],
    ["<img src='img/bomi.png'>", "Maryland", "Gbarpolu", "Bomi", "C"],
   

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
	
	
	test.innerHTML = "<center>"+question+"</center>";
	test.innerHTML += "<p class='lead'> Which County flag is in the picture above?</p>";
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





/* Author: Srivatsa Udupa */
/* Date: 07th February 2017 */
function populate() {
	if (quiz.isEnded()) {
	showScores();	//show scores();
	}
	else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i <choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i,choices[i]);
		}

		showProgress();
	}
}

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}

}

function showProgress(argument) {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber +" of " + quiz.questions.length;

}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	
	gameOverHtml += "<h2 id=\"score\"> Your score:" + quiz.score +"</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

var submitter = document.getElementById("submitter");
submitter.onclick = function(){acceptUsername();}
function acceptUsername(){
	var txtFirstName = document.getElementById("firstName");
	var nameDiv = document.getElementById("name");
	var sessionValue = document.getElementById("sessionValue");
	var sessionDiv = document.getElementById("session");
        var quizzer = document.getElementById("quizzer");
        var quizIntro = document.getElementById("quizIntro");
        var errorText = document.getElementById("errorText");
        var progress = document.getElementById("progress");
        if(txtFirstName.value==null || txtFirstName.value==" " || txtFirstName.value=="")
        {
            errorText.style.display = 'block';
        }
        else
        {
            nameDiv.style.display='none';
            errorText.style.display = 'none';
            sessionDiv.style.display = 'block';
            sessionValue.style.display = 'block';
            progress.style.display = 'block';
            quizIntro.style.display ='none';
            quizzer.style.display = 'block';
            sessionValue.innerHTML = 'Welcome '+txtFirstName.value;
            
    }
        //quizzer.style.transition = 'opacity .25s ease-in-out , top 2s ease-in-out';
}

var questions = [
new Question("Which one is not an object oriented programming language?",["Java", "C#", "C++","C"],"C"),
new Question("Which language is used to style a web page?",["HTML", "Jquery","CSS","XML"],"CSS"),
new Question("There are _____ main components of object oriented programming?",["1", "6", "2","4"],"4"),
new Question("Which language is used for web apps?",["PHP", "Python","Javascript","All"],"All"),
new Question("MVC is a _____.",["Language","Library","Framework","All"],"Framework")

];

var quiz = new Quiz(questions);

populate();

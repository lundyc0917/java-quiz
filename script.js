var questionsEl = [
  {
    questionEntry: "Commonly used data types DO NOT include:",
    choices: [
      "numbers", 
      "alerts", 
      "strings", 
      "booleans"
    ],
    answer: "alerts"
  },
  {
    questionEntry: "The condition in an if / else statement is enclosed within ____.",
    choices: [
      "parentheses", 
      "quotes", 
      "square brackets", 
      "curly brackets"
    ],
    answer: "parentheses"
  },
];

// Set Variables
var highscoreEl = document.getElementById("#highscore");
var gameTimerEl = document.getElementById("#gameTimer");
var mainEl = document.querySelector(".details");
var startBtn = document.querySelector("#startButton");
var question = document.querySelector("#question");
var quiz =   document.querySelector(".quiz")
var gameScore = 0;
var gameLength = 0;
var gameTimePassed = 0;
var timePenalty = 0;
var currentQuestion = 0;
var gameStart;

init ();

startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startTimer);

function init() {
  gameScore = 0;
  gameLength = 0;
  gameTimePassed = 0;
  timePenalty = 0;
  currentQuestion = 0;
  quiz.setAttribute("style", "visibility: visible;");
}


function startQuiz () {
  startBtn.style.display = "none";
  setTime ();
  showQuestion();
}

function showQuestion(){
  // for ( i = 0, i <= questionsEl.length; i++)
  
  for (i = 0; i < questionsEl[currentQuestion].choices.length; i++) {
    if(gameLength <= 0) {
    // showScores();
    }
    else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = questionsEl[i].questionEntry;
      console.log(element);
      // show answer choices
      var questionChoices = questionsEl[i].choices;
      for(var i = 0; i < questionChoices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = questionChoices[i];
          
      }
    }
  }
}



// Run Game Timer
function setTime() {
  clearInterval(gameStart);
  gameLength = questionsEl.length * 15;
  var timeRemaining = gameLength - gameTimePassed - timePenalty;
  if (timeRemaining <= 0) {
    clearInterval(gameLength);

  }console.log(gameLength);
}


function startTimer () {
  setTime();

  gameStart = setInterval(function() {
    gameTimePassed++;
  }, 1000);
}

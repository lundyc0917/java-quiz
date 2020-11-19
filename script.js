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
  }
];

// Set Variables
var highscoreEl = document.getElementById("#highscore");
var gameTimerEl = document.getElementById("#gameTimer");
var mainEl = document.querySelector(".details");
var gameScore = 0;
var gameLength = 0;
var TimePassed = 0;
var gameStart;
var quiz = {};

// Set Initialize function
init();

function init() {
  mainEl.innerHTML = "";
  reset();
  var startQuiz = document.createElement("button");
  startQuiz.textContent = "Start Quiz";

  mainEl.appendChild(startQuiz);

  startQuiz.addEventListener("click", function () {
    playQuiz(questionsEl);
  });
}
// Reset values
function reset() {
  score = 0;
  gameLength = 0;
  TimePassed = 0;
  gameStart;
}

function playQuiz(questionsEl) {
  quiz = showQuestion(questionsEl);

  gameLength = quiz.length * 15;

  startGameTimer();
  presentQuestion();
}
// Get questions to appear
// function buildQuiz(arr){
//   var questArr = [];
//   for (var i = 0; i < arr.length; i++) {

//     questArr.push(arr[i]);
//   }
//   return questArr;
// }

function showQuestion() {
  if ( quiz.length === 0 ) {
    endOfGame();
    return;
  }

  curQuestion = quiz.pop();

  mainEl.innerHTML = "";
   
  var question = document.createElement("h1");
  question.textContent = curQuestion.questionEntry;
  mainEl.appendChild(question)

  var choiceBox = document.createElement("ul");
  mainEl.appendChild(choiceBox);

  for( var i=0; i<curQuestion.choices.length; i++ ) {
    var listChoice = document.createElement("li");
    listChoice.setAttribute("choice-value", curQuestion.choices[i]);
    listChoice.setAttribute("id","questionNum-"+i);
    listChoice.textContent = curQuestion.choices[i];
    choiceBox.appendChild(listChoice)
  }

  choiceBox.addEventListener("click", function (){
    scoreAnswer(curQuestion);
  });
}


// Run Game Timer
function setTime() {
  clearInterval(gameStart);
  gameSeconds = gameLength;
}

function scoreTime() {
  gameTimerEl.textContent = gameLength - gameTimePassed;

  if ( (gameLength - gameTimePassed) < 1 ) {
   endOfGame();
  }
}

function startTimer () {
  setTime();

  gameStart = setInterval(function() {
    gameTimePassed++; 
    scoreTime();
  }, 1000);
}

function stopTime() {
  gameSeconds = 0;
  clearInterval(gameStart);
}
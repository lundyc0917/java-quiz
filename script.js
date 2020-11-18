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
var highscoreEl = document.querySelector("#highscore");
var gameTimerEl = document.querySelector("#gameTimer");
var mainEl = document.querySelector(".details");
var gameScore = 0;
var gameLength = 0;
var TimePassed = 0;

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
}

//questions pulled from various sources.

var questionList = [
  {
    questionEntry: "Commonly used data types DO NOT include:",
    choices: [
      "numbers", 
      "alerts", 
      "strings", 
      "booleans"
    ],
    answer:"alerts"
  },
  {
    questionEntry: "The condition in an if / else statement is enclosed within ____.",
    choices: [
      "parentheses", 
      "quotes", 
      "square brackets", 
      "curly brackets"
    ],
    answer:"parentheses"
  },
  {
    questionEntry: "Which of the following best describes JavaScript?",
    choices: [
      "a low-level programming language.",
      "a scripting language precompiled in the browser.",
      "a compiled scripting language.",
      "an object-oriented scripting language."
    ],
    answer:"an object-oriented scripting language."
  },
  {
    questionEntry: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: [
      "terminal / bash", 
      "for loops", 
      "console log",
      "JavaScript"
    ],
    answer:"console log"
  },
  {
    questionEntry: "Data is stored in localStorage as _____.",
    choices: [
      "arrays", 
      "strings", 
      "objects",
      "All of the Above"
    ],
    answer:"strings"
  },
  {
    questionEntry: "When assigend to variables, what must string values be enclosed with?",
    choices: [
      "commas", 
      "parenthesis", 
      "quotes", 
      "curley brackets"
    ],    
    answer:"quotes"
  },
  {
    questionEntry: "Is JavaScript case sensitive?",
    choices: [
      "Yes", 
      "No",
      "Sometimes", 
      "Only when it decides to be"
    ],    
    answer:"Yes"
  },
  {
    questionEntry: "Arrays in JavaScript can be used to store ______.",
    choices: [
      "numbers",
      "strings",
      "objects", 
      "All of the Above"
    ],    
    answer:"All of the Above"
  },
  {
    questionEntry: "What does DOM stand for in JavaScript?",
    choices: [
      "Document of Master", 
      "Document Object Model", 
      "Decisions Over Meals", 
      "Data Object Modal"
    ],    
    answer:"Document Object Model"
  },
  {
    questionEntry: "Which type of pop up box will allow a user to type a response?",
    choices: [
      "alert", 
      "input", 
      "prompt", 
      "confirm"
    ],    
    answer:"prompt"
  }
];


// Set Variables
var highScore = document.querySelector("#highscore");
var gameTimer = document.querySelector("#gameTimer");
var mainDetails = document.querySelector("#details");
var timerTab = document.querySelector("#timers");
// var test = false;
var gameScore = 0;
var quiz = {};
var gameLength = 0;
var timeLapsed = 0;
var interval;

// Set Initialize function
init();

//init function to start game
function init() {
  mainDetails.innerHTML = "";
  clear();
  var startQuiz = document.createElement("button");
  startQuiz.textContent = "Start Quiz";

  mainDetails.appendChild(startQuiz);
  startQuiz.addEventListener("click", function () {
    //run playquiz function using quesitonlist
    playQuiz(questionList);
  });

}
// clear and reset game
function clear() {
  gameScore = 0;
  gameLength = 0;
  timeLapsed = 0;
  interval;
}

// Set playQuiz to show timer and pull queitons from array
// initialized in "init" function
function playQuiz(questionList) {
  quiz = returnQuestions(questionList);
  timerTab.setAttribute("style", "visibility: visible;");
  gameLength = quiz.length * 15;

  //run startimer and show question functions
  starTimer();
  showQuestion();
}
// Pull Question from array
// initalized in "playQuiz" function
function returnQuestions(arr) {
  var questArr = [];
  for (var i = 0; i < arr.length; i++) {
    questArr.push(arr[i]);
  }
  return questArr;
}

// Display question and multiple choice list
// initalized in "playQuiz" function
function showQuestion() {
  if ( quiz.length === 0 ) {
    gameEnd();
    return;
  }

  currentQuest = quiz.pop();
  mainDetails.innerHTML = "";
   
  //show question within the h1 tag
  var question = document.createElement("h1");
  question.textContent = currentQuest.questionEntry;
  mainDetails.appendChild(question);

  //pull multiple choice list based on question and create list element
  var choiceList = document.createElement("ul");
  mainDetails.appendChild(choiceList);
  
  //display choices for each question within created elements
  for( var i=0; i<currentQuest.choices.length; i++ ) {
    var answerChoices = document.createElement("li");
    answerChoices.setAttribute("choice-value", currentQuest.choices[i]);
    answerChoices.setAttribute("id","questionNum-"+i);
    answerChoices.textContent = currentQuest.choices[i];
    choiceList.appendChild(answerChoices);
  }
  
  //click listener for selected answer
  choiceList.addEventListener("click", function (){
    questionScore(currentQuest);
  });
}

// Add Score for each answer
// initalized in "showQuestion" function
function questionScore(cur) {
  var e = event.target;
  if ( e.matches("li")) {
    var selectedItem = e.textContent;
    
    if ( selectedItem === cur.answer ) {
      gameScore += gameLength - timeLapsed;
    } else {
      gameLength -= 10;
    }
    showAnswers(cur);
  }
}

// Check answers and display "correct" or "incorrect" at bottom of screen
function showAnswers(cur) {
  for (var i=0; i<cur.choices.length; i++) {
    var ansResult = document.querySelector("#result");

// Display correct/incorrect tag based on selection
    if ( cur.choices[i] === cur.answer ) {
      ansResult.setAttribute("style", "visibility: visible;");
      ansResult.setAttribute("style", "background-color:#61daff;");
      ansResult.textContent = "Correct";
    } else {
      ansResult.setAttribute("style", "visibility: visible;");
      ansResult.setAttribute("style", "background-color:#ff7575;")
      ansResult.textContent = "Incorrect";
    }
  }
  setTimeout(showQuestion,500);
}

// Run game timer
// initalized in "startTimer" function
function setTime() {
  clearInterval(interval);
  gameSeconds = gameLength;
}

// initalized in "startTimer" function
function showTime() {
 gameTimer.textContent = gameLength - timeLapsed;

  if ( (gameLength - timeLapsed) < 1 ) {
   gameEnd();
  }
}

// initalized in "playQuiz" function
function starTimer () {
  setTime();

  interval = setInterval(function() {
    timeLapsed++; 
    showTime();
  }, 1000);
}

// initalized in "gameEnd" function
function stopTime() {
  gameSeconds = 0;
  clearInterval(interval);
}

// record user initials and game gameScore
// initialized in both "showTime" and "showQuestion" functions
function gameEnd() {
  stopTime();
  mainDetails.innerHTML = "";

  // hide timer
  timerTab.setAttribute("style", "visibility: hidden;");

  var ansResult = document.querySelector("#result");
  ansResult.setAttribute("style", "visibility: hidden;");

  //create header
  var heading = document.createElement("p");
  heading.textContent = "GAME OVER";

  //create p element 
  var userScore = document.createElement("p");
  userScore.setAttribute("id", "userScore");
  userScore.textContent = " You scored " + gameScore + "points."; 

  //create play agian button
  var playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.textContent = "Play again";
  playAgain.addEventListener("click", init);

  //label for player initial entry box
  var playerInitials = document.createElement("label");
  playerInitials.setAttribute("for","initials");
  playerInitials.textContent = "Enter Initials: ";

  //display input box for player initials
  var initialInput = document.createElement("input");
  initialInput.setAttribute("id","initials");
  initialInput.setAttribute("name","initials");
  initialInput.setAttribute("minlength","3");
  initialInput.setAttribute("maxlength","3");
  initialInput.setAttribute("size","3");

  //display in main (#details) portion of page
  mainDetails.appendChild(heading);
  mainDetails.appendChild(userScore);
  mainDetails.appendChild(playerInitials);
  mainDetails.appendChild(initialInput);
  mainDetails.appendChild(playAgain);


  //store scores and player intials
  initialInput.addEventListener("input", function() {
    initialInput.value = initialInput.value.toUpperCase();
    if ( initialInput.value.length === 3 ) { 

      var thisScore = [ { name: initialInput.value, gameScore: gameScore } ]; 

      var pastScores = JSON.parse(localStorage.getItem("highScore")); 

      if (pastScores !== null) { 
        pastScores.push(thisScore[0]); 
      } else {
        pastScores = thisScore;
      }
    
      localStorage.setItem("highScore", JSON.stringify(pastScores));
    }
  });
  //TODO: Add score display and sort by score from highest to lowest.
}

//TODO: display for high scores
// highScore.addEventListener("click", highScore);
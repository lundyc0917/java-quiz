# Java Quiz
Mulitple choice quiz to test JavaScript knowledge

## Link to Deploy setItem
https://lundyc0917.github.io/java-quiz/

## Motivation
Create a multiple choice quiz that tests the user's knowledge of JavaScript and records their score.

## Build Status

build | passing

## Screen Shots



## Framework Used

Built Using:
 - JavaScript
 - HTML
 - CSS

## Features
When the user clicks the "Start Quiz" button, they are taken through a series of questions with multiple choice answers.

When a question is presented, the user is directed to click on the correct answer.  When an answer is selected, the answer choices briefly change colors to indicate the correct answer.  If the user chooses the correct answer, the remaining time is added to their final score.  If the user chooses an incorrect answer, the remaining time is decreased by 10 seconds.

The game ends when the user makes it through all of the questions or the timer runs out.  Once the game ends, the user's score is displayed and the user is asked to enter three initials to save the score.

The user is taken to the Top 5 Scores' page that displays the five highest scores.

## Code Example
```````````````````````
// Check answers and display "correct" or "incorrect" at bottom of screen
function showAnswers(cur) {
  for (var i=0; i<cur.choices.length; i++) {
    var questrow = document.querySelector("#result");

// Display correct/incorrect tag based on selection
    if ( cur.choices[i] !== cur.answer ) {
      questrow.setAttribute("style", "visibility: visible;");
      questrow.textContent = "Incorrect";
    } else {
      questrow.setAttribute("style", "visibility: visible;");
      questrow.textContent = "Correct";
    }
  }
  setTimeout(showQuestion,500);
}
```````````````````````
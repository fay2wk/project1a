/* global $ */
/* exports isGameOver, whoWon, playTurn, restart, currentQuestion, correctAnswer, numberOfAnswers */
var questions = [{
  question: 'How long is an eon?',
  choices: ['A: 1 million years.', 'B: 1 thousand years. ', 'C: 1 billion years.', 'D: 1 hundred years.'],
  correctAns: 2
}, {
  question: "What was Charlie Brown's father's job?",
  choices: ['A: Barber.', 'B: Plumber. ', 'C: Accountant.', 'D: Mechanic'],
  correctAns: 0
}, {
  question: 'How long is an eon?',
  choices: ['A: 1 million years.', 'B: 1 thousand years. ', 'C: 1 billion years.', 'D: 1 hundred years.'],
  correctAns: 2
}, {
  question: "What was Charlie Brown's father's job?",
  choices: ['A: Barber.', 'B: Plumber. ', 'C: Accountant.', 'D: Mechanic'],
  correctAns: 0
}]

var currentQn = 0
var player1Score = 0
var player2Score = 0
var gameOver = false

function numberOfQuestions () {
  return questions.length
}

function currentQuestion () {
  console.log('current' + currentQn)
  return currentQn
}

function numberOfAnswers () {
  return questions[currentQn].choices.length
}

function correctAnswer () {
  console.log('correct answer '+ questions[currentQn].correctAns)
  return questions[currentQn].correctAns
}

function playTurn (choice) {
  if (gameOver === true) {
    return false
  }
  var correct = false
  if (choice === questions[currentQn].correctAns) {
  correct = true
    if ((currentQn % 2) === 1) {
      player1Score++
    } else {
      player2Score++
    }
  currentQn++
  }
  if (currentQuestion === numberOfQuestions()) {
    gameOver = true
  }
  return correct
}

function restart () {
   if (gameOver) {
     currentQn = 0
     player1Score = 0
     player2Score = 0
   }
 }

function isGameOver () {
  return gameOver
}

function whoWon () {
  if (gameOver === false) {
    return 0 }
    else if (player1Score > player2Score) {
      return 1
    } else if (player1Score < player2Score) {
      return 2
    } else if (player1Score === player2Score) {
      return 3
    }
}

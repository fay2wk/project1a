/* global */
/* exports isGameOver, whoWon, playTurn, restart, currentQuestion, correctAnswer, numberOfAnswers */

var questions = [{
  question: 'How long is an eon?',
  choices: ['A: 1 million years.', 'B: 1 thousand years. ', 'C: 1 billion years.', 'D: 1 hundred years.'],
  correctAnswer: 'C'
}, {
  question: "What was Charlie Brown's father's job?",
  choices: ['A: Barber.', 'B: Plumber. ', 'C: Accountant.', 'D: Mechanic'],
  correctAnswer: 'A'
}, {
  question: 'When did the Beatles win their first Grammy?',
  choices: ['A: 1966.', 'B: 1967. ', 'C: 1965.', 'D: 1964'],
  correctAnswer: 'C'
}, {
  question: 'What color was the first Model T Ford?',
  choices: ['A: Blue.', 'B: Black. ', 'C: Silver.', 'D: Gray'],
  correctAnswer: 'B'
}]

var currentQuestion = 0
var player = 1
function playTurn () {
  if (isGameOver() === true) {
    return false
  } else if (player === 1) {
    player = 2 }
      else player = 1
  }

function numberOfQuestions (num) {
    return (questions.length)
  }

function currentQuestion () {
    return currentQuestion
  }

function correct (answer) {
    if (answer === questions.correctAnswer) {
      return true
    } else {
      return false
  }
}

var player1Score = 0
function getPlayer1Score () {
    if ((currentQuestion % 2 === 1) && correct === true) {
      player1Score ++
    } else {
      return
    }
  }

var player2Score = 0
function getPlayer2Score () {
  if ((currentQuestion % 2 === 0) && correct === true) {
   player2Score++
  } else {
    return
  }
}

function numberOfAnswers () {
  return questions.choices.length
}

function whoWon () {
  if (player1Score > player2Score) {
    return 1
  } else if (player2Score > player1Score) {
    return 2
  } else if (player1Score === player2Score) {
    return 3
  }
  return 0
}

function isGameOver () {
  if (whoWon() === 0) {
    return false
  } else if (whoWon()) {
    return true
  }
}

function restart () {
  if (isGameOver() === true) {
    currentQuestion = 0
    player1Score = 0
    player2Score = 0
  } else {
    return false
  }
}

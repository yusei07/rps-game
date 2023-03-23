function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissor"];
  const comp_choice = choice[Math.floor(Math.random() * choice.length)];
  // console.log(comp_choice)
  return comp_choice; 
}

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase()
  computer = computerSelection.toLowerCase()
  var score;

  if (player === computer) {
    console.log('It\'s a tie!')
    score = 0
  } else if (player == 'rock' && computer == 'scissor') {
    console.log('You win! rock beats scissor!')
    score = 1
  } else if (player == 'paper' && computer == 'rock') {
    console.log('You win! paper beats rock!')
    score = 1
  } else if (player == 'scissor' && computer == 'paper') {
    console.log('You win! scissor beats paper!')
    score = 1
  } else {
    console.log(`You lose! ${player} can't beat ${computer}`)
    score = -1
  }
  return score
}

function game() {
  var playerScore = 0
  var computerScore = 0

  for (var i = 1; i < 6; i++) {
    // number of round
    console.log(`Round ${i}`)

    var playerSelection = prompt("Rock\nPaper\nScissor\n\nEnter your choice:  ")
    console.log(`You chose ${playerSelection}`)

    var computerSelection = getComputerChoice()
    console.log(`Computer chose ${computerSelection}`)

    const score = playRound(playerSelection, computerSelection)

    if (score == -1) {
      computerScore += 1
      playerScore -= 1
    } else if (score == 0) {
      computerScore += 0
      playerScore += 0
    } else {
      computerScore -= 1
      playerScore += 1
    }
  }
  console.log(`\n\nFinal Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`)

  if (playerScore > computerScore) {
    console.log("Player wins!")
  } else if (computerScore > playerScore) {
    console.log("Computer wins!")
  } else {
    console.log("It's a tie!")
  }
}

game()

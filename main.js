// if (window.innerWidth < 1024) {
//   document.getElementById("not-supported").style.display = "block";
// }

const loader = document.getElementById('preloader')
window.addEventListener('load', () => {
  loader.style.display = 'none'
  // console.log('preloader hidden')
})

const enemy = document.querySelector('.vending-machine') 
const popup = document.querySelector('.popup')
const corner = document.querySelector('.corner')
const weapons = document.querySelector('.player-box')
let story = document.querySelector('.story-box')
enemy.addEventListener('click', () => {
  weapons.style.opacity = '1'
  popup.style.opacity = '1'
  corner.style.opacity = '1'
  story.remove() // in case of  overlapping between player box & story box
})


////////////////////////


function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"]
  const comp_choice = choice[Math.floor(Math.random() * choice.length)]
  return comp_choice 
}

let playerScore = 0
let computerScore = 0

function playRound(player, computer) {
  // console.log(player, computer)
  if (player == computer) {
    return 'It\'s a tie!'
  } else if (player == 'rock' && computer == 'scissors') {
    playerScore += 1
    return 'You win!'
  } else if (player == 'paper' && computer == 'rock') {
    playerScore += 1
    return 'You win!'
  } else if (player == 'scissors' && computer == 'paper') {
    playerScore += 1
    return 'You win!'
  } else {
    computerScore += 1
    return 'You lose!'
  }
}

function clearGame() {
  weapons.remove()
  popup.remove()
  corner.remove()
}

function calculateScore(playerScore, computerScore) {
  if (playerScore == numberOfGames) {
    document.querySelector('.win-message').style.display = 'block'
    document.querySelector(".lose-message").style.display = "none";
    clearGame()
  } else if (computerScore == numberOfGames) {
    document.querySelector(".win-message").style.display = "none";
    document.querySelector('.lose-message').style.display = 'block'
    clearGame()
  }
}


////////////////////////


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const dmgPlayer = document.querySelector('.dmg-player')
const dmgVendMachine = document.querySelector('.dmg-vendmachine')

const numberOfGames = 5

function playGame(selection) {
  result = playRound(selection, getComputerChoice())
  document.getElementById('p1').innerHTML = result

  // display dmg
  if (result == 'You win!') {
    dmgPlayer.classList.remove('show')
    void dmgPlayer.offsetWidth
    dmgPlayer.classList.add('show')
  } else if (result == 'You lose!') {
    dmgVendMachine.classList.remove('show')
    void dmgVendMachine.offsetWidth
    dmgVendMachine.classList.add('show')
  }
  // scoreboard
  document.getElementById('p2').innerHTML = playerScore + ' ' + computerScore
  // calculate final result 
  calculateScore(playerScore, computerScore)
}

rock.addEventListener('click', () => {
  playGame('rock')
})

paper.addEventListener('click', () => {
  playGame('paper')
})

scissors.addEventListener('click', () => {
  playGame('scissors')
})

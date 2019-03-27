var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;
var options = [ 'rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = computerPlay();

        document.getElementById('result').innerHTML = playRound(playerSelection, computerSelection);
        document.getElementById('playerChoice').innerHTML = playerSelection;
        document.getElementById('computerChoice').innerHTML = computerSelection;
        document.getElementById('score').innerHTML = "The score is "+playerScore+" to "+computerScore;
    });
});

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}
    
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
            return "It's a tie!"
        } else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                computerScore++;
                return "You lose! Paper covers rock."
            } else {
                playerScore++;
                return "You win! Rock crushes scissors."
            }
        }  else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                computerScore++;
                return "You lose! Scissors cut paper."
            } else {
                playerScore++;
                return "You win! Paper covers rock."
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                computerScore++;
                return "You lose! Rock crushes scissors."
            } else {
                playerScore++;
                return "You win! Scissors cut paper."
            }
        }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    game()
}
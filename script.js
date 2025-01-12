let humanScore = 0, computerScore = 0;
function getComputerChoice() {
    const choice = Math.random();
    if (choice < 1 / 3) {
        return "rock";
    } else if (choice < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanScore == 5){
        document.querySelector('.result').innerHTML = `Human wins the game`;
    }
    else if(computerScore == 5)
        document.querySelector('.result').innerHTML = `Computer wins the game`;
    else if (humanChoice === computerChoice) {
        document.querySelector('.result').innerHTML = `Tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        document.querySelector('.result').innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        
    } else {
        document.querySelector('.result').innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    document.querySelector('.score').innerHTML = `Computer score: ${computerScore}
     Human score: ${humanScore}`;

}

function playGame() {
    document.querySelector(".rock").addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    document.querySelector(".paper").addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    document.querySelector(".scissors").addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();

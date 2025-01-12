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
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        document.querySelector('.result').innerHTML = `Tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        document.querySelector('.result').innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
        
    } else {
        document.querySelector('.result').innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
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

let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choice = Math.random();
    if(choice >= 0 && choice < 1/3){
        return "rock";
    }
    else if(choice >= 1/3 && choice < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt();
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == 'rock'){
        if(computerChoice == 'rock'){
            console.log("Tie.");
        }
        else if(computerChoice == 'paper'){
            console.log("You lose.");
            computerChoice++;
        }
        else{
            console.log("You win.");
            humanChoice++;
        }
    }
    else if(humanChoice == 'paper'){
        if(computerChoice == 'rock'){
            console.log("You win.");
            humanChoice++;
        }
        else if(computerChoice == 'paper'){
            console.log("Tie.");
        }
        else{
            console.log("You lose.");
            computerChoice++;
        }
    }
    else{
        if(computerChoice == 'rock'){
            console.log("You lose.");
            computerChoice++;
        }
        else if(computerChoice == 'paper'){
            console.log("You win.");
            humanChoice++;
        }
        else{
            console.log("Tie.");
        }
    }
}
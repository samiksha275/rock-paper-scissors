console.log(getComputedChoice());
function getComputedChoice(){
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
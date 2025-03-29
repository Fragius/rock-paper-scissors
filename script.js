const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3 - 0.1);
    return CHOICES[index];
};

function getHumanChoice() {
    return prompt("Enter either rock, paper or scissors")
}

function determineWinner(humanChoice, computerChoice) { 
    if (computerChoice === humanChoice) {
        return "tie";
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        return "computer";
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        return "user";
    } else {
        return;
    }
};

function createMessage(humanChoice, computerChoice, winner) {
    if (!winner) {
        return `invalid input: ${humanChoice} is not a valid input`
    } else if (winner === "user") {
        return `You win! ${humanChoice} beats ${computerChoice}.`
    } else if (winner === "computer") {
        return `You lose! ${computerChoice} beats ${humanChoice}`
    } else {
        return `It's a tie! both players chose ${humanChoice}`
    }
}

function playRound(humanChoice, computerChoice) {
    return winner = determineWinner(humanChoice, computerChoice);
};

function incrementWinner(winner, humanScore, computerScore) {
    if (winner === "user") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    return [humanScore, computerScore];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let r = 0; r < 5; r++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();
        const winner = playRound(humanChoice, computerChoice);
        [humanScore, computerScore] = incrementWinner(winner, humanScore, computerScore);
        alert(createMessage(humanChoice, computerChoice, winner));
    }
    if (humanScore > computerScore) {
        alert("You won!");
    } else if ( computerScore < humanScore) {
        alert("You lost!");
    } else {
        alert("It's a tie!");
    }
};

playGame();
const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3 - 0.1);
    return CHOICES[index];
};

function getHumanChoice() {
    return prompt("Enter either Rock, paper or scissors");
}

function determineWinner(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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

function playRound(humanChoice, computerChoice, message) {
    const winner = determineWinner(humanChoice, computerChoice);
    alert(message(humanChoice, computerChoice, winner));
};
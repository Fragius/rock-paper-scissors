let round = 0;
let computerScore = 0;
let humanScore =0;

const CHOICES = ["rock", "paper", "scissors"];

const container = document.querySelector(".container");
const roundDiv = document.createElement("div");
roundDiv.className = "round";
container.appendChild(roundDiv);
roundDiv.textContent = "Round 0";

const middleContainer = document.createElement("div");
middleContainer.className = "middle";
container.appendChild(middleContainer);

const roundWinnerDiv =  document.createElement("div");
middleContainer.appendChild(roundWinnerDiv);
const btnDiv = document.createElement("div");
btnDiv.className = "btnContainer";
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const gameWinnerDisplay = document.createElement("div");
middleContainer.appendChild(btnDiv);
btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorsBtn);
middleContainer.appendChild(gameWinnerDisplay);
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

const scoresDiv = document.createElement("div");
scoresDiv.className = "score";
container.appendChild(scoresDiv);
scoresDiv.textContent = "Human Score 0 Computer Score 0";
console.log(container);
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3 - 0.1);
    return CHOICES[index];
};

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
    switch (winner) {
        case "user":
            return `You win! ${humanChoice} beats ${computerChoice}.`

        case "computer":
            return `You lose! ${computerChoice} beats ${humanChoice}`
        default:
            return `It's a tie! both players chose ${humanChoice}`
    }
}

function playRound(humanChoice) {
    if (round === 5) {
        round = 1;
        humanScore = 0;
        computerScore = 0;
    } else {
    round++;
    } 
    const computerChoice = getComputerChoice();
    const winner = determineWinner(humanChoice, computerChoice);
    roundWinnerDiv.textContent = createMessage(humanChoice, computerChoice, winner);
    incrementWinner(winner);
    roundDiv.textContent = `Round ${round}`
    scoresDiv.textContent = `Human Score ${humanScore} Computer Score ${computerScore}`;
    if (round === 5) {
        humanScore === computerScore 
        ? gameWinnerDisplay.textContent = "It's a tie!" 
        : (humanScore > computerScore 
            ? gameWinnerDisplay.textContent = "You win!"
            : gameWinnerDisplay.textContent = "You lost!" );
    } else {
        gameWinnerDisplay.textContent = "";
    }
};

function incrementWinner(winner) {
    if (winner === "user") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++
    }
}
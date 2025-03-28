const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3 - 0.1);
    return choices[index];
};
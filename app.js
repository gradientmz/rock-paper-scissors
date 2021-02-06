var playerScore = 0;
var botScore = 0;
var playerSelection = "rock";
var botSelection = "rock";
var gameEnded = false;
const moves = ["rock", "paper", "scissors"]

window.onload = (event) => {
    document.getElementById("rock").addEventListener("click", function() {
        game("rock");
    });
    document.getElementById("paper").addEventListener("click", function() {
        game("paper");
    });
    document.getElementById("scissors").addEventListener("click", function() {
        game("scissors");
    });
}

function game(input) {
    if(gameEnded === false) {
    var botInput = moves[~~(Math.random() * moves.length)];
    result = playRound(input, botInput)
    switch(result) {
        case "win": console.log("Game won!"); document.getElementById("currentEvent").innerHTML = "Game won!"; playerScore ++; break;
        case "tie": console.log("Game tied."); document.getElementById("currentEvent").innerHTML = "Game tied!"; break;
        case "loss": console.log("Game lost..."); botScore++; document.getElementById("currentEvent").innerHTML = "Game lost..."; break;
        default: console.log("Bug in need of fixing."); break;
    }
    document.getElementById("playerPoints").innerHTML = playerScore;
    document.getElementById("botPoints").innerHTML = botScore;
    if(playerScore > 4) {
        console.log("5 wins! The player won!")
        document.getElementById("currentEvent").innerHTML = "You won the match!";
        gameEnded = true
    }
    if(botScore > 4) {
        console.log("5 wins! The bot won!")
        document.getElementById("currentEvent").innerHTML = "The bot wins the match!";
        gameEnded = true
        }
    }
}

function playRound(playerSelection, botSelection) {
    if(playerSelection === "rock") {
        switch(botSelection) {
            case "rock": return "tie"; 
            case "paper": return "loss";
            case "scissors": return "win";
        }
    }
    else if(playerSelection === "paper") {
        switch(botSelection) {
            case "rock": return "win";
            case "paper": return "tie";
            case "scissors": return "loss";
        }
    }
    else if(playerSelection === "scissors") {
        switch(botSelection) {
            case "rock": return "loss";
            case "paper": return "win";
            case "scissors": return "tie";
        }
    }
}
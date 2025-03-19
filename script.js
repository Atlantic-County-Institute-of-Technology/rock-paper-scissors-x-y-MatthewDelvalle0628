var you;
var player1 = 0;
var opponent;
var player2 = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; 1 < 3; i++) {
        // <img id="rock.jpeg">
        let choice = document.createElement("img");
        choices.id = choices[i];
        choice.src - choices[i] + ".png";
        document.getElementById("choices").append(choice);
    }
}
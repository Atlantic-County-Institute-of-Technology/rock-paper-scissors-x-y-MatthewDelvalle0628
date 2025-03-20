var you;
var player1 = 0;
var opponent;
var player2 = 0;

var choices = ["rock", "paper", "scissors"];

window.onload + function() {
    for (let i = 0; i < 3; i++) {
        //img id="rock"
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for player2
    player2 =  choices[ Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
}
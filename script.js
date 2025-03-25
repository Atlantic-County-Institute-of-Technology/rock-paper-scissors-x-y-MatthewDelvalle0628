

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userrock = document.getElementById("userrock")
const userpaper = document.getElementById("userpaper")
const userscissors = document.getElementById("userscissors")
var player1 = 0;
var opponent;
var player2 = 0;

var choices = ["rock", "paper", "scissors"];

rock.addEventListener("click", playerrock)
function playerrock (){
    userrock.style.display = "block";
    userpaper.style.display = "none";
    userscissors.style.display = "none";
}

paper.addEventListener("click", playerpaper)
function playerpaper (){
    userrock.style.display = "none";
    userpaper.style.display = "block";
    userscissors.style.display = "none";
}

scissors.addEventListener("click", playerscissors)
function playerscissors (){
    userrock.style.display = "none";
    userpaper.style.display = "none";
    userscissors.style.display = "block";
}

function





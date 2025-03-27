

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userrock = document.getElementById("userrock")
const userpaper = document.getElementById("userpaper")
const userscissors = document.getElementById("userscissors")
const cpurock = document.getElementById("cpurock")
const cpupaper = document.getElementById("cpupaper")
const cpuscissors = document.getElementById("cpuscissors")
const playerScore = document.getElementById("player1")
const cpuScore = document.getElementById("player2")
const winnerbanner = document.getElementById("winner")
var player1 = 0;
var opponent;
var player2 = 0;
let computerScore = 0;
let userScore = 0;




var choices = ["rock", "paper", "scissors"];

rock.addEventListener("click", playerrock)
function playerrock (){
    userrock.style.display = "block";
    userpaper.style.display = "none";
    userscissors.style.display = "none";
    user = 1;
    computerChoice();
    winner(); 
}

paper.addEventListener("click", playerpaper)
function playerpaper (){
    userrock.style.display = "none";
    userpaper.style.display = "block";
    userscissors.style.display = "none";
    user = 2;
    computerChoice();
    winner();
}


scissors.addEventListener("click", playerscissors)
function playerscissors (){
    userrock.style.display = "none";
    userpaper.style.display = "none";
    userscissors.style.display = "block";
    user = 3;
    computerChoice();
    winner();
}


function computerChoice(){
    cpu = Math.floor(Math.random() * 3) + 1
    if (cpu == 1) {
        cpurock.style.display = "block";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "none";
  
    }
    else if (cpu == 2) {
        cpurock.style.display = "none";
        cpupaper.style.display = "block";
        cpuscissors.style.display = "none";
 
    }
    else {
        cpurock.style.display = "none";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "block";
      
    }
    console.log("cpu: " + computerScore)
}

function winner() {
    if (user == cpu) {
        console.log("draw");
    }
    else if ((user == 1 && cpu == 3) || (user == 2 && cpu == 1) || (user == 3 && cpu == 2))  {
        console.log ("Player WINS!")
        userScore++
        console.log(userScore)
        playerScore.innerHTML = userScore;
        winnerbanner.innerHTML = "player wins!"
    }
    else {
        console.log ("CPU Wins!")
        computerScore++
        cpuScore.innerHTML = computerScore;
       winnerbanner.innerHTML = "computer wins!"
    }
}


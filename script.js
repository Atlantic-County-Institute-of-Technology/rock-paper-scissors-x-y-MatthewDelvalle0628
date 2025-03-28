
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userpen = document.getElementById("userpen")
const pen = document.getElementById("pen")
const trash = document.getElementById("trash")
const userrock = document.getElementById("userrock")
const userpaper = document.getElementById("userpaper")
const userscissors = document.getElementById("userscissors")
const usertrash = document.getElementById("usertrash")
const cpupen = document.getElementById("cpupen")
const cpurock = document.getElementById("cpurock")
const cpupaper = document.getElementById("cpupaper")
const cpuscissors = document.getElementById("cpuscissors")
const cputrash = document.getElementById("cputrash")
const playerScore = document.getElementById("player1")
const cpuScore = document.getElementById("player2")
const winnerbanner = document.getElementById("winner")
var player1 = 0;
var opponent;
var player2 = 0;
let computerScore = 0;
let userScore = 0;




var choices = ["rock", "paper", "scissors", "pen", "trash"];

rock.addEventListener("click", playerrock)
function playerrock (){
    userrock.style.display = "block";
    userpaper.style.display = "none";
    userscissors.style.display = "none";
    userpen.style.display = "none";
    usertrash.style.display = "none";
    user = 1;
    computerChoice();
    winner(); 
}

paper.addEventListener("click", playerpaper)
function playerpaper (){
    userrock.style.display = "none";
    userpaper.style.display = "block";
    userscissors.style.display = "none";
    userpen.style.display = "none";
    usertrash.style.display = "none";
    user = 2;
    computerChoice();
    winner();
}


scissors.addEventListener("click", playerscissors)
function playerscissors (){
    userrock.style.display = "none";
    userpaper.style.display = "none";
    userscissors.style.display = "block";
    userpen.style.display = "none";
    usertrash.style.display = "none";
    user = 3;
    computerChoice();
    winner();
}

pen.addEventListener("click", playerpen)
function playerpen (){
    userrock.style.display = "none";
    userpaper.style.display = "none";
    userscissors.style.display = "none";
    userpen.style.display = "block";
    usertrash.style.display = "none";
    user = 4
    computerChoice();
    winner();
}

trash.addEventListener("click", playertrash)
function playertrash (){
    userrock.style.display = "none";
    userpaper.style.display = "none";
    userscissors.style.display = "none";
    userpen.style.display = "none";
    usertrash.style.display = "block";
    user = 5
    computerChoice();
    winner();
}

function computerChoice(){
    cpu = Math.floor(Math.random() * 5) + 1
    if (cpu == 1) {
        cpurock.style.display = "block";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "none";
        cpupen.style.display = "none";
        cputrash.style.display = "none";
  
    }
    else if (cpu == 2) {
        cpurock.style.display = "none";
        cpupaper.style.display = "block";
        cpuscissors.style.display = "none";
        cpupen.style.display = "none";
        cputrash.style.display = "none";
 
    }
    else if (cpu == 3) {
        cpurock.style.display = "none";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "block";
        cpupen.style.display = "none";
        cputrash.style.display = "none";
    }
    else if (cpu == 4) {
        cpurock.style.display = "none";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "none";
        cpupen.style.display = "block";
        cputrash.style.display = "none";
    }
    else {
        cpurock.style.display = "none";
        cpupaper.style.display = "none";
        cpuscissors.style.display = "none";
        cpupen.style.display = "none";
        cputrash.style.display = "block";
    }

    console.log("cpu: " + computerScore)
}

function winner() {
    if (user == cpu) {
        console.log("draw");
    }
    else if ((user == 1 && cpu == 3) || (user == 2 && cpu == 1) || (user == 3 && cpu == 2) || (user == 5 && cpu == 1) || (user == 4 && cpu == 3) || (user == 5 && cpu == 2) || (user == 3 && cpu == 4)){
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




const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userrock = document.getElementById("userrock")
const userpaper = document.getElementById("userpaper")
const userscissors = document.getElementById("userscissors")
const cpurock = document.getElementById("cpurock")
const cpupaper = document.getElementById("cpupaper")
const cpuscissors = document.getElementById("cpuscissors")
var player1 = 0;
var opponent;
var player2 = 0;
let cpu = 0;
let user = 0;


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
    console.log("cpu: " + cpu)
}

function winner() {
    if (user == cpu) {
        console.log("draw");
    }
    else if ((user == 1 && cpu == 3) || (user == 2 && cpu == 1) || (user == 3 && cpu == 2))  {
        console.log ("Player WINS!")
        userScore++
    }
    else {
        console.log ("CPU Wins!")
        cpu++
    }
}

// if (you == opponent) {
//     yourScore += 1;
//     opponentScore += 1;
// }
// else if (you == "rock") {
//         if (opponent == "scissors") {
//             yourScore += 1;
//         }
//         else if (opponet == "paper") {
//             opponentScore += 1;
//         }
//     }

// else if (you == "scissors") {
//         if (opponent == "paper") {
//             yourScore += 1;
//         }
//         else if (opponet == "rock") {
//             opponentScore += 1;
//         }
//     }

// else if (you == "paper") {
//         if (opponent == "rock") {
//             yourScore += 1;
//         }
//         else if (opponet == "scissors") {
//             opponentScore += 1;
//         }
//     }


// document.getElementById("your-score").innertext = opponentScore;

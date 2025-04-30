"use strict";
const keuzeButtons = document.querySelectorAll(".mijnKeuze")
const gameResult = document.getElementById("gameResult");
const keuzes = ["blad", "steen", "schaar"]

let computerKeuzes = ""
let mijnKeuze = ""
let heroScore = 0;
let computerScore = 0;

for (const keuzeButton of keuzeButtons) {
    keuzeButton.addEventListener("click", () => {
        computerKeuzes = keuzes[Math.floor(Math.random() * keuzes.length)]
        mijnKeuze = keuzeButton.value;
        checkIfwin(mijnKeuze)
    })
}

function checkIfwin(mijnKeuze) {
    switch (mijnKeuze) {
        case "blad":
            if (computerKeuzes === "steen") {
                gameResult.textContent = "Jij wint"
                heroScore++;
            } else if (computerKeuzes === "schaar") {
                gameResult.textContent = "Computer wint"
                computerScore++;
            } else {
                gameResult.textContent = "Gelijk spel"
            }
            break
        case "steen":
            if (computerKeuzes === "schaar") {
                gameResult.textContent = "Jij wint"
                heroScore++;
            } else if (computerKeuzes === "blad") {
                gameResult.textContent = "Computer wint"
                computerScore++;

            } else {
                gameResult.textContent = "Gelijk spel"
            }
            break
        case "schaar":
            if (computerKeuzes === "steen") {
                gameResult.textContent = "Computer wint"
                computerScore++;
            } else if (computerKeuzes === "blad") {
                gameResult.textContent = "Jij wint"
                heroScore++;
            } else {
                gameResult.textContent = "Gelijk spel"
            }
    }
    updateScore();
}

function updateScore(){

    document.getElementById("score").textContent = heroScore + " : " + computerScore;
    document.getElementById("heroHP").textContent = healthBuilder(computerScore);
    document.getElementById("enemyHP").textContent = healthBuilder(heroScore);
}

function healthBuilder(score) {
    let health = "";
    for (let i = 0; i < 5- score; i++) {
        health += "🟩";
    }
    for (let i = 0; i < score; i++) {
        health += "🟥";
    }
    return health;
}




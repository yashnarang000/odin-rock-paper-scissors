function getComputerChoice() {
    let checker = 3*Math.random();
    let computerChoice;

    if (checker <= 1) {
        computerChoice = "Rock";
    }

    else if (checker > 1 && checker <=2) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

let humanScore = 0, computerScore = 0;

// method 01: how Jim does it
/*
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    alert(`The mortal chose ${humanChoice.toUpperCase()}!`);


    let combination;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            combination = 0;
        }

        else if (computerChoice == "paper") {
            combination = 1;
        }

        else if (computerChoice == "scissors") {
            combination = 2;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            combination = 3;
        }

        else if (computerChoice == "paper") {
            combination = 4;
        }

        else if (computerChoice == "scissors") {
            combination = 5;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            combination = 6;
        }

        else if (computerChoice == "paper") {
            combination = 7;
        }

        else if (combinationChoice == "scissors") {
            combination = 8;
        }
    }

    if (combination == 0 || combination == 4 || combination == 8) {
        alert("Oh, that's a tie...");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;

    }

    else if (combination == 1 || combination == 5 || combination == 6) {
        alert(`OH LOOK AT THAT! Computer throws a ${computerChoice.toUpperCase()}! IN YOUR FACE!`)
        computerScore = computerScore + 1;
    }

    else if (combination == 2 || combination == 3 || combination == 7) {
        alert(`A ${humanChoice.toLowerCase()}? That beat computer's ${computerChoice.toLowerCase()}. Darn it, you mortal!`)
        humanScore = humanScore + 1;
    }

    return [humanScore, computerScore];
}
*/

// how Dwight does it
function playRound(humanChoice, computerChoice, humanScore, computerScore, resultContainer) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    printOut(resultContainer, `The mortal chose ${humanChoice.toUpperCase()}!`);


    let human_trinary; // pun on binary (0, 1) = trinary (0, 1, 2)
    let computer_trinary;

    if (humanChoice == "love") {
        printOut(resultContainer, "Human wins because of the power of love!");
        return [1000, 0];
    }

    if (humanChoice == "rock") {
        human_trinary = 0;
    }

    else if (humanChoice == "paper") {
        human_trinary = 1;
    }

    else if (humanChoice == "scissors") {
        human_trinary = 2;
    }

    if (computerChoice == "rock") {
        computer_trinary = 0;
    }

    else if (computerChoice == "paper") {
        computer_trinary = 1;
    }

    else if (computerChoice == "scissors") {
        computer_trinary = 2;
    }

    let combination = Number(`${human_trinary}${computer_trinary}`); // using trinary combinations (ex: 0 + 1 = 01)

    if (combination == 1 || combination == 12 || combination == 20) {
        printOut(resultContainer, `OH LOOK AT THAT! Computer throws a ${computerChoice.toUpperCase()}! IN YOUR FACE!`)
        computerScore = computerScore + 1;
    }

    else if (combination == 0 || combination == 11 || combination == 22) {
        printOut(resultContainer, "Oh, that's a tie...");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
    }

    else if (combination == 10 || combination == 21 || combination == 2) {
        printOut(resultContainer, `A ${humanChoice}? That beat computer's ${computerChoice}. Darn it, you mortal!`)
        humanScore = humanScore + 1;
    }

    return [humanScore, computerScore];
}

function playGame() {
    let i = 0;
    let humanScored = 0;
    let computerScored = 0;
    while (i<5) {
        let humanChose = getHumanChoice();
        let computerChose = getComputerChoice();

        let [newHumanScore, newComputerScore] = playRound(humanChose, computerChose, humanScored, computerScored);

        humanScored = newHumanScore;
        computerScored = newComputerScore;
        
        if (humanScored == 1000) {
            return [humanScored, computerScored];
        }

        i=i+1;
    }

    return [humanScored, computerScored];
}

// // Working Main Code:

// let ifPlayAgain;

// while (true) {
//     let [finalHumanScore, finalComputerScore] = playGame();

//     alert(`Final score of human is ${finalHumanScore}!\nFinal score of computer is ${finalComputerScore}!`);

//     if (finalHumanScore > finalComputerScore) {
//         alert("Hail Humans! You win, mortal...");
//     }

//     else if (finalComputerScore > finalHumanScore) {
//         alert("Told you, mortal. We computers are unbeatable!");
//     }

//     else {
//         alert("Nice game mortal. But the game's draw!");
//     }

//     isPlayAgain = confirm("Do you wanna play again, mortal?");

//     if (isPlayAgain == false) {
//         break;
//     }
// }

function displayQuestion(container) {
    const question = document.createElement("h1");
    question.textContent = "What do you chose, Mortal?";
    container.appendChild(question);
}

function displayButtons(container) {
    const rockButton = document.createElement("button");
    rockButton.classList.add("bttn");
    rockButton.style.background = "brown";
    rockButton.textContent = "Rock";
    rockButton.id = "rock";

    const paperButton = document.createElement("button");
    paperButton.classList.add("bttn");
    paperButton.style.background = "grey";
    paperButton.textContent = "Paper";
    paperButton.id = "paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.classList.add("bttn");
    scissorsButton.style.background = "#005059";
    scissorsButton.textContent = "Scissors";
    scissorsButton.id = "scissors";

    container.append(rockButton, paperButton, scissorsButton);
}

function displayMainMenu(container) {
    container.innerHTML = "";
    displayQuestion(container);
    displayButtons(container);
}

function printOut(container, stuffToPrint) {
    container.innerHTML = "";

    const printed = document.createElement("h1");
    printed.textContent = stuffToPrint;
    container.appendChild(printed);
}

const superContainer = document.querySelector("#super-container");
displayMainMenu(superContainer);

const resultContainer = document.createElement("div");
resultContainer.id = "result-container";
superContainer.appendChild(resultContainer);

function getHumanChoice(event) {
    
    button = event.target;

    const humanChose = button.id;
    const computerChose = getComputerChoice().toLowerCase();
    playRound(humanChose, computerChose, humanScore, computerScore, resultContainer);
}

superContainer.addEventListener("click", getHumanChoice);
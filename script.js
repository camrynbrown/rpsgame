
let humanScore = 0;
let computerScore = 0;
// UI USING JS

const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const outcome = document.querySelector("#outcome");
const computerText = document.querySelector("#computer-choice");
const youChose = document.querySelector("#youChose");
const reset = document.querySelector("#reset");

function playRound() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        let choice = 1;
        const computerChoice = getComputerChoice();
        console.log("Human choice: " + choice + " Computer choice " + computerChoice);
        getWinner(choice, computerChoice);
    });

    paper.addEventListener("click", () => {
        choice = 2;
        const computerChoice = getComputerChoice();
        console.log("Human choice: " + choice + " Computer choice " + computerChoice);
        getWinner(choice, computerChoice);
    });

    scissors.addEventListener("click", () => {
        choice = 3;
        const computerChoice = getComputerChoice();
        console.log("Human choice: " + choice + " Computer choice " + computerChoice);
        getWinner(choice, computerChoice);
    });

}

function getComputerChoice() {
    let number = Math.floor((Math.random() * 3) + 1);
    switch (number) {
        case 1:
            return number;
        case 2:
            return number;
        case 3:
            return number;
    }
}

function updateScore() {
    playerScore.textContent = `Player: ${humanScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
}

function getWinner(humanChoice, computerChoice) {
    //console.log("Human choice: " + humanChoice + " Computer choice " + computerChoice);
    
    let message1 = "You lose!";
    let message2 = "You win!";
    if (humanChoice == 1 && computerChoice == 2) {
        // console.log(message1 + " Paper beats rock.");
        computerScore += 1;
        youChose.textContent = `You chose: Rock`;
        computerText.textContent = "Computer chose: Paper";
        outcome.textContent = `${message1}`;
    }

    else if (humanChoice == 1 && computerChoice == 3) {
        // console.log (message2 + " Rock beats scissors!!");
        humanScore += 1;
        youChose.textContent = `You chose: Rock`;
        computerText.textContent = "Computer chose: Scissors";
        outcome.textContent = `${message2}`;
    }

    else if (humanChoice == 2 && computerChoice == 1) {
        // console.log (message2 + " Paper beats rock!!");
        humanScore += 1;
        youChose.textContent = `You chose: Paper`;
        computerText.textContent = "Computer chose: Rock";
        outcome.textContent = `${message2}`;
    }

    else if (humanChoice == 2 && computerChoice == 3) {
        // console.log(message1 + " Scissors beats paper.");
        computerScore += 1;
        youChose.textContent = `You chose: Paper`;
        computerText.textContent = "Computer chose: Scissors";
        outcome.textContent = `${message1}`;
    }

    else if (humanChoice == 3 && computerChoice == 1) {
        // console.log(message1 + " Rock beats scissors.");
        computerScore += 1;
        youChose.textContent = `You chose: Scissors`;
        computerText.textContent = "Computer chose: Rock";
        outcome.textContent = `${message1}`;
    }

    else if (humanChoice == 3 && computerChoice == 2) {
        // console.log(message2 + " Scissors beats paper.");
        humanScore += 1;
        youChose.textContent = `You chose: Scissors`;
        computerText.textContent = "Computer chose: Paper";
        outcome.textContent = `${message2}`;
    }

    else if (humanChoice == computerChoice) {
        youChose.textContent = ``;
        computerText.textContent = ``;
        outcome.textContent = "It's a tie!";
    }

    updateScore();
}

reset.addEventListener("click", () => {
    playerScore.textContent = `Player: ${"0"}`;
    compScore.textContent = `Computer: ${"0"}`;
    computerScore = 0;
    humanScore = 0;
});

playRound();

// CONSOLE METHOD

/* function getComputerChoice() {
    let number = Math.floor((Math.random() * 3) + 1);
    console.log("Computer Chose: ");
    switch (number) {
        case 1:
            console.log("Rock");
            return number;
        case 2:
            console.log("Paper");
            return number;
        case 3:
            console.log("Scissors");
            return number;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase();
    
    switch (choice) {
        case "ROCK":
            choice = 1;
            return choice;
        case "PAPER":
            choice = 2;
            return choice;
        case "SCISSORS":
            choice = 3;
            return choice;
        default:
            return alert("That is not a valid choice.");
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("Human choice: " + humanChoice + " Computer choice " + computerChoice);
    
    let message1 = "You lose!";
    let message2 = "You win!";
    if (humanChoice == 1 && computerChoice == 2) {
        console.log(message1 + " Paper beats rock.");
        computerScore += 1;
    }

    else if (humanChoice == 1 && computerChoice == 3) {
        console.log (message2 + " Rock beats scissors!!");
        humanScore += 1;
    }

    else if (humanChoice == 2 && computerChoice == 1) {
        console.log (message2 + " Paper beats rock!!");
        humanScore += 1;
    }

    else if (humanChoice == 2 && computerChoice == 3) {
        console.log(message1 + " Scissors beats paper.");
        computerScore += 1;
    }

    else if (humanChoice == 3 && computerChoice == 1) {
        console.log(message1 + " Rock beats scissors.");
        computerScore += 1;
    }

    else if (humanChoice == 3 && computerChoice == 2) {
        console.log(message2 + " Scissors beats paper.");
        humanScore += 1;

    }

    else if (humanChoice == computerChoice) {
        console.log(" It is a tie.");
    }

}


function playGame() {
    let games = prompt("How many games do you want to play?");

    for (let i = 0; i < games; i++ ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
} */





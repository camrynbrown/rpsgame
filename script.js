
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
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
        computerScore =+ 1;
    }

    else if (humanChoice == 1 && computerChoice == 3) {
        console.log (message2 + " Rock beats scissors!!");
        humanScore =+ 1;
    }

    else if (humanChoice == 2 && computerChoice == 1) {
        console.log (message2 + " Paper beats rock!!");
        humanScore =+ 1;
    }

    else if (humanChoice == 2 && computerChoice == 3) {
        console.log(message1 + " Scissors beats paper.");
        computerScore =+ 1;
    }

    else if (humanChoice == 3 && computerChoice == 1) {
        console.log(message1 + " Rock beats scissors.");
        computerScore =+ 1;
    }

    else if (humanChoice == 3 && computerChoice == 2) {
        console.log(message2 + " Scissors beats paper.");
        humanScore =+ 1;

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
}

playGame();


let humanScore = 0
let computerScore = 0

console.log("Hello World!!")

function getComputerChoice() {
    // randomly return one of the choices
    let number = Math.floor(Math.random() * 3)
    switch (number) {
        case 0:
            return console.log("Rock")
        case 1:
            return console.log("Scissors")
        case 2:
            return console.log("Paper")
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    alert("You chose " + choice)

    return choice
}

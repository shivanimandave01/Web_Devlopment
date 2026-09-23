let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const playerScoreElement =
    document.querySelector("#player-score");

const computerScoreElement =
    document.querySelector("#computer-score");

const message =
    document.querySelector("#message");

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const playerChoice = choice.id;

        const computerChoice = getComputerChoice();

        const result =
            determineWinner(playerChoice, computerChoice);

        updateScore(result);
        showResult(
            result,
            playerChoice,
            computerChoice
        );

    });

});
function getComputerChoice() {

    const choices = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {

        return "draw";
    }

    if (
        (playerChoice === "rock" &&
            computerChoice === "scissors") ||

        (playerChoice === "paper" &&
            computerChoice === "rock") ||

        (playerChoice === "scissors" &&
            computerChoice === "paper")
    ) {

        return "player";

    }
    return "computer";
}

function updateScore(result) {

    if (result === "player") {

        playerScore++;

        playerScoreElement.innerText =
            playerScore;
    }

    else if (result === "computer") {

        computerScore++;

        computerScoreElement.innerText =
            computerScore;
    }

}
function showResult(
    result,
    playerChoice,
    computerChoice
) {

    if (result === "player") {

        message.innerText =
            `You Win! ${playerChoice} beats ${computerChoice}`;

    }

    else if (result === "computer") {

        message.innerText =
            `Computer Wins! ${computerChoice} beats ${playerChoice}`;

    }

    else {

        message.innerText =
            `Draw! Both selected ${playerChoice}`;
    }

}
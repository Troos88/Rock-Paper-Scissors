const _CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay()
{
   let computerChoice = _CHOICES[Math.floor(Math.random() * 3)];

    return computerChoice;

}

let playerPoints = 0;
let computerPoints = 0;


function playRound(playerChoice, computerChoice)
{
if(game() <= 5)
{
    let won = "YOU WON! " + playerChoice + " BEATS " + computerChoice;
    let lose = "YOU LOST! " + computerChoice + " BEATS " + playerChoice;
    let draw = "IT'S A DRAW! BOTH CHOOSE " + playerChoice;
    
    showRoundChoices(playerChoice, computerChoice);

    switch (playerChoice)
    {
        case "ROCK":
            if (computerChoice == "PAPER")
            {
                computerPoints++;
                return lose;
            }
            if (computerChoice == "SCISSORS")
            {
                playerPoints++;
                return won;
            }
            if (computerChoice == playerChoice)
            {
                return draw;
            }
            break;
        case "PAPER":
            if (computerChoice == "ROCK")
            {
                playerPoints++;
                return won;
            }
            if (computerChoice == "SCISSORS")
            {
                computerPoints++;
                return lose;
            }
            if (computerChoice == playerChoice)
            {
                return draw;
            }
            break;
        case "SCISSORS":
            if (computerChoice == "ROCK")
            {
                computerPoints++;
                return lose;
            }
            if (computerChoice == "PAPER")
            {
                playerPoints++;
                return won;
            }
            if (computerChoice == playerChoice)
            {
                return draw;
            }
            break;
        default:
            break;
    }
}

}

function showScores()
{
    let message = document.getElementById("round");
    let playerScore = document.getElementById("playerscore");
    let computerScore = document.getElementById("computerscore");

    if(playerPoints > computerPoints)
    {
        message.innerText = "YOU WON THE GAME!";
        flashElement(playerScore);
    }
    else if(playerPoints < computerPoints)
    {
        message.innerText = "YOU LOST THE GAME!";
        flashElement(computerScore);
    }
    else
    {
        message.innerText = "THE GAME WAS A DRAW!"
    }

    message.style.transform = "scale(2)";
    message.style.transition = "1s";

}

function flashElement(score)
{
    score.style.transform = "scale(1.5)";
    score.style.transition = "1s";

    let small = () => 
    {
        score.style.transform = "scale(1)";
        score.style.transition = "1s";
    }
        setTimeout(small, 1000)
}

function showRoundChoices(playerChoice, computerChoice)
{
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorsButton = document.getElementById("scissors");
    let message = document.getElementById("message");
    let arena = document.getElementById("arena");
    let player = document.getElementById("playerarea");
    let computer = document.getElementById("computerarea");
 
    rockButton.onclick = null;
    paperButton.onclick = null;
    scissorsButton.onclick = null;
    player.style.backgroundImage = "url('"+playerChoice+".png')";
    computer.style.backgroundImage = "url('"+computerChoice+".png')";
    arena.style.opacity = 100;
    arena.style.gap = "10%";
    arena.style.transition = "0.5s";
    message.style.transform = "scale(2)";
    message.style.transition = "1s";

    
    setTimeout(resetArea, 3000);

}

function resetArea()
{
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorsButton = document.getElementById("scissors");
    let message = document.getElementById("message");
    let arena = document.getElementById("arena");
    let roundText = document.getElementById("round");
    let playerScore = document.getElementById("playerscore");
    let computerScore = document.getElementById("computerscore");

    let round = games;

    if(games > 5) round = 5;

    roundText.innerText = "ROUND " + round;
    if(round != 5) flashElement(roundText);

    rockButton.onclick = playRock;
    paperButton.onclick = playPaper;
    scissorsButton.onclick = playScissors;
    arena.style.opacity = 0;
    arena.style.gap = "100%";
    arena.style.transition = "0.5s";
    message.style.transform = "scale(0)";
    message.style.transition = "1s";
    playerScore.innerText = playerPoints;
    computerScore.innerText = computerPoints;


    if(games > 5)
    {
        setTimeout(showScores, 200);
    }


}

function playRock()
{
    document.getElementById("message").innerText = playRound(_CHOICES[0], computerPlay());
}

function playPaper()
{
    document.getElementById("message").innerText = playRound("PAPER", computerPlay());
}

function playScissors()
{
    document.getElementById("message").innerText = playRound("SCISSORS", computerPlay());
}

let games = 1;

function game()
{
    return games++;

}


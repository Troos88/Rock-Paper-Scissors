const _CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay()
{
   let computerChoice = _CHOICES[Math.floor(Math.random() * 3)];

    return computerChoice;

}

function playRound(playerChoice, computerChoice)
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
                return lose;
            }
            if (computerChoice == "SCISSORS")
            {
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
                return won;
            }
            if (computerChoice == "SCISSORS")
            {
                return won;
            }
            if (computerChoice == playerChoice)
            {
                return draw;
            }
            break;
        case "SCISSORS":
            if (computerChoice == "ROCK")
            {
                return lose;
            }
            if (computerChoice == "PAPER")
            {
                return lose;
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

function showRoundChoices(playerChoice, computerChoice)
{
    let player = document.getElementById("playerarea");
    let computer = document.getElementById("computerarea");
    player.style.backgroundImage = "url('"+playerChoice+".png')";
    computer.style.backgroundImage = "url('"+computerChoice+".png')";
}

function playRock()
{
    playRound(_CHOICES[0], computerPlay());
}

function playPaper()
{
    playRound("PAPER", computerPlay());
}

function playScissors()
{
    playRound("SCISSORS", computerPlay());
}

function game()
{
    for(let i = 1; i <= 5; i++)
    {
        
    }
}


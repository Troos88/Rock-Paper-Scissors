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


function game()
{
    let myPoints = 0;
    let comPoints = 0;

    for(let i = 1; i <= 5; i++)
    {
        console.log("ROUND " + i)
        console.log("ROCK", computerPlay());
    }
}

game();
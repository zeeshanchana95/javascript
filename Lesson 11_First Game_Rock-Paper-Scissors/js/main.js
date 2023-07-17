//Building first interactive game: Rock, Paper, Scissors

let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
    
    //play game
    let playerChoice = prompt("Please enter rock, paper or scissors");
    if(playerChoice) {

        //continue to play
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 +1);
            let computer = computerChoice === 1 ? "rock"
                           : computerChoice === 2 ? "paper"
                           : "scissors";

            let result = playerOne === computer
                        ? "Tie game!"
                        : playerOne === "rock" && computer === "paper"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                        : playerOne === "paper" && computer === "scissors"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                        : playerOne === "scissors" && computer === "rock"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                        : `playerOne: ${playerOne}\nComputer: ${computer}\n PlayerOne Wins`
                alert(result); 
                let playAgain = confirm("Play again");
                playAgain ? location.reload() :alert("Thanks for playing")
           }                    
         
    
        else {           

            //user didn't choose any value
            alert("Your didn't enter rock, paper or scissors");
        }
    } else {
        //user changed his mind
        alert("I guess, you changed your mind, may be next time");
    }
} else {
    //when not want to play
    alert("Ok, may be next time.");
}
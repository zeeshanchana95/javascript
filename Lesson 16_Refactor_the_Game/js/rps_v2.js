
//Rock, Paper, Scissors: Using Conditions and Loops

let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
    //play game
   while(playGame) {
        const playerChoice = prompt("Please enter rock, paper or scissors");
        if(playerChoice || playerChoice === "") {
            //continue to play
            const playerOne = playerChoice.trim().toLowerCase();
            if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
                const computerChoice = Math.floor(Math.random() * 3 +1);
                const rpsArray = ["rock", "paper", "scissors"]
                const computer = rpsArray[computerChoice];
    
                const result = playerOne === computer
                            ? "Tie game!"
                            : playerOne === "rock" && computer === "paper"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                            : playerOne === "paper" && computer === "scissors"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                            : playerOne === "scissors" && computer === "rock"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer Wins`
                            : `playerOne: ${playerOne}\nComputer: ${computer}\n PlayerOne Wins`
                    alert(result);
                    playGame = confirm("Play again?");
                    if(!playGame) alert("Thanks for playing");
                    continue; 
            } else {           
                //user didn't choose any value
                alert("Your didn't enter rock, paper or scissors");
                continue;
            }
        } else {
            //user changed his mind
            alert("I guess, you changed your mind, may be next time");
            break;
        }
   }
} else {
    //when not want to play
    alert("Ok, may be next time.");
}

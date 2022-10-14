/*
let playGame = confirm("Shall we play rock, paper, or scissors?")

if (playGame) {
  while (playGame) {
  
    const playerChoice = prompt("Please enter rock, paper, or scissors.")
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (playerOne === "rock" || playerOne === "paper" || playerChoice === "scissors") {
        const computerChoice = Math.floor(Math.random() * 3)
        const rpsArray = ["rock", "paper", "scissors"];
        let computer = rpsArray[computerChoice];

          let result = 
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper" 
            ? `playerOne: ${playerOne} \nComputer: ${computer}
              \nComputer wins!`
            : playerOne === "paper" && computer === "scissors" 
            ? `playerOne: ${playerOne} \nComputer: ${computer}
            \nComputer wins!`
            : playerOne === "scissors" && computer === "rock" 
            ? `playerOne: ${playerOne} \nComputer: ${computer}
              \nComputer wins!`
            : `playerOne: ${playerOne} \nComputer: ${computer}
              \nplayerOne wins!`;
          alert(result);
          playGame = confirm("Play again?")
          if (!playGame) alert("Ok, thanks for playing.");
          continue;

      } else {
        alert("You didn't enter rock, paper, or scissors.")
        continue;
      }

    } else {
      alert("I guess you changed your mind. Maybe next time.")
      break;
    }

  }
} else {
  alert("Ok, maybe next time.");
}
*/

const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
}

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }    
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice;
      continue;
    }
    const computerChoice = getComputerChoice();
    const getResult = determineWinner(playerChoice, computerChoice);
    displayResult(getResult);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
}

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.")
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.")
}

const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.")
};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3)
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[computerChoice];
};

const determineWinner = (player, computer) => {
  const winner = 
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper" 
      ? `playerOne: ${player} \nComputer: ${computer}
        \nComputer wins!`
      : player === "paper" && computer === "scissors" 
      ? `playerOne: ${player} \nComputer: ${computer}
      \nComputer wins!`
      : player === "scissors" && computer === "rock" 
      ? `playerOne: ${player} \nComputer: ${computer}
        \nComputer wins!`
      : `playerOne: ${player} \nComputer: ${computer}
        \nplayerOne wins!`;
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
}

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Invalid answer";
  }
};

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, compChoice) {
  if (userChoice === "bomb") {
    return "User won using a cheat code!";
  }

  if (userChoice === compChoice) {
    return "It's a tie!";
  }

  if (userChoice === "rock") {
    if (compChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "paper") {
    if (compChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "scissors") {
    if (compChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice("scissors");
  const compChoice = getComputerChoice();

  console.log("User: " + userChoice);
  console.log("Comp: " + compChoice);
  console.log("");

  console.log(determineWinner(userChoice, compChoice));
}

playGame();
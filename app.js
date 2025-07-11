let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const updateMsg = document.querySelector("#msg");
let userScore1 = document.querySelector("#user-score");
let comScore1 = document.querySelector("#comp-score");

const genComp = () => {
  const options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  let compChoice = options[index];
  return compChoice;
};
const drawGame = () => {
  updateMsg.innerText = "It was a draw! Try again!";
  updateMsg.style.backgroundColor = " rgb(25, 18, 66)";
};

const playGame = (userChoice) => {
  const compChoice = genComp();
  console.log(userChoice);
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if(userChoice === "scissors"){
      userWin = compChoice === "rock" ? false : true;
    
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    console.log("win");
    updateMsg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    updateMsg.style.backgroundColor = "green";

    userScore1.innerText = userScore;
  } else {
    compScore++;
    comScore1.innerText = compScore;

    console.log("lose");
    updateMsg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    updateMsg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

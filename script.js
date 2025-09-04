let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = "👤 You chose: " + userChoice;
  document.getElementById("computer-choice").textContent = "💻 Computer chose: " + computerChoice;

  let winner = "";

  if (userChoice === computerChoice) {
    winner = "It's a Draw 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "🎉 You Win!";
    userScore++;
  } else {
    winner = "😢 Computer Wins!";
    computerScore++;
  }

  document.getElementById("winner").textContent = winner;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

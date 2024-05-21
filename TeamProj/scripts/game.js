const gameContainer = document.getElementById("game-container");
const player = document.getElementById("player");
const scoreElement = document.getElementById("score");
const nameElement = document.getElementById("name");
const usernameInput = document.getElementById("username");
const endGameButton = document.getElementById("endGameButton");

let score = 0;
let username = '';

function generateRandomCircle() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const size = Math.random() * 50 + 20;

  const x = Math.random() * (containerWidth - size);
  const y = Math.random() * (containerHeight - size);

  player.style.left = `${x}px`;
  player.style.top = `${y}px`;
  player.style.width = `${size}px`;
  player.style.height = `${size}px`;
}

usernameInput.addEventListener('input', (event) => {
  username = event.target.value;
  updateScoreDisplay();
});

gameContainer.addEventListener("click", (event) => {
  const playerRect = player.getBoundingClientRect();
  if (
    event.clientX >= playerRect.left &&
    event.clientX <= playerRect.left + playerRect.width &&
    event.clientY >= playerRect.top &&
    event.clientY <= playerRect.top + playerRect.height
  ) {
    score++;
    updateScoreDisplay();
    generateRandomCircle();
  }
});

function updateScoreDisplay() {
  scoreElement.textContent = `${username ? username + "'s" : 'Your'} Score: ${score}`;
}

endGameButton.addEventListener('click', () => {
  const gameOverAlert = `Гра закінчена!\n\nІм'я: ${username}\nРахунок: ${score}\n\nХочете розпочати гру заново?`;
  const restartChoice = confirm(gameOverAlert);

  if (restartChoice) {
    score = 0;
    username = ''; 
    updateScoreDisplay();
    usernameInput.value = '';
    generateRandomCircle();
  }
});

generateRandomCircle();
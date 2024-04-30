const gridSize = 5;
let initialMaps = [];

let clickCount = 0;
let timerInterval;
let elapsedTime = 0;

fetch('./api/data.json')
    .then(response => response.json())
    .then(data => {
        initialMaps = data;
        startNewGame();
    })
    .catch(error => console.error('Error loading initial maps:', error));

let grid = [];

function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.dataset.row = i;
            gridItem.dataset.col = j;
            gridItem.addEventListener('click', () => {
                clickCount++;
                document.getElementById('moves').textContent = clickCount;
                toggleCell.call(gridItem);
            });
            gridContainer.appendChild(gridItem);
            grid[i][j] = 0;
        }
    }
}

function toggleCell() {
    const row = parseInt(this.dataset.row);
    const col = parseInt(this.dataset.col);
    toggle(row, col);
    updateGrid();
    checkWin();
}

function toggle(row, col) {
    grid[row][col] = 1 - grid[row][col]; // Toggle cell state
    if (row > 0) {
      grid[row - 1][col] = 1 - grid[row - 1][col]; // Toggle upper neighbor
    }  
    if (row < gridSize - 1) {
      grid[row + 1][col] = 1 - grid[row + 1][col]; // Toggle lower neighbor
    } 
    if (col > 0) {
      grid[row][col - 1] = 1 - grid[row][col - 1]; // Toggle left neighbor
    } 
    if (col < gridSize - 1) {
      grid[row][col + 1] = 1 - grid[row][col + 1]; // Toggle right neighbor
    } 
}

function updateGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        const row = parseInt(item.dataset.row);
        const col = parseInt(item.dataset.col);
        if (grid[row][col] === 1) {
            item.style.backgroundColor = '#ffcc00';
        } else {
            item.style.backgroundColor = '#fff';
        }
    });
}

function checkWin() {
    const flattenedGrid = grid.flat();
    if (flattenedGrid.every(cell => cell === 0)) {
        clearInterval(timerInterval);
        alert('Congratulations! You won!');
    }
}

function startNewGame() {
    clearInterval(timerInterval);
    clickCount = 0;
    document.getElementById('moves').textContent = clickCount;
    elapsedTime = 0;
    document.getElementById('time').textContent = elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    const randomIndex = Math.floor(Math.random() * initialMaps.length);
    grid = initialMaps[randomIndex];
    updateGrid();
}

function restartGame() {
    startNewGame();
}

function updateTimer() {
    elapsedTime++;
    document.getElementById('time').textContent = elapsedTime;
}

document.getElementById('start-btn').addEventListener('click', startNewGame);
document.getElementById('restart-btn').addEventListener('click', restartGame);

createGrid();
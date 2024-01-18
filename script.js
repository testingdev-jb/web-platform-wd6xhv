const scoreCounter = document.querySelector('.score-counter');
console.log(scoreCounter);

// var was the only way that variables were declared - global accessible everywhere, can be changed 

const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('end-game-text');
const playAgainButton = document.querySelector('.play-again');

//game state - need this for maximum score, number of bombs 

const totalCells = 100;
const totalBombs = 90; 
const maxScore = 5;
const bombsList = [];

function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart();
}


if (score=== maxScore) {
    endGame();
}
let score = 0;

for (let i = 1; i <=100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    grid.appendChild(cell);

cell.addEventListener('click', function (){

    cell.classList.add('cell-clicked');
    updateScore();
    
})

grid.appendChild(cell);
}

while (bombsList.length<totalBombs) {
    //generate a random number between 1 and 100, inclusive
   const randomNumber = Math.floor( Math.random() * totalCells) + 1;

    if(!bombsList.includes(randomNumber)) {
      bombsList.push(randomNumber);
    }
}


function endGame () {
    endGameText.innerHTML('YOU <br> WON')
    endGameScreen.classList.add('win')
    endGameScreen.remove('hidden')
}
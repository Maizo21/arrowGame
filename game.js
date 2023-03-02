const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnDown = document.querySelector("#down");
const btnRight = document.querySelector("#right");
const spanLives = document.querySelector("#lives");
const spanTime = document.querySelector("#time");

let canvasSize;
let elementSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
  x: undefined,
  y: undefined,
};

const giftPosition = {
  x: undefined,
  y: undefined,
};

let enemiesPositions = [];

window.addEventListener("load", setCanvasSize);

window.addEventListener("resize", setCanvasSize);

function startGame() {
  game.font = elementSize * 0.8 + "px Verdana";
  game.fillStyle = "blue";
  game.textAlign = "end";

  const map = maps[level];

  if (!map) {
    gameWin();
    return;
  }

  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
  }

  const mapRows = map.trim().split("\n");
  const mapRowsCols = mapRows.map((row) => row.trim().split(""));

  showLives();

  enemiesPositions = [];
  game.clearRect(0, 0, canvasSize, canvasSize);

  mapRowsCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      if (
        col === "O" &&
        playerPosition.x === undefined &&
        playerPosition.y === undefined
      ) {
        playerPosition.x = posX;
        playerPosition.y = posY;
      } else if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == "X") {
        enemiesPositions.push({
          x: posX,
          y: posY,
        });
      }

      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();
}

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  elementSize = canvasSize / 10;

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  startGame();
}

window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnDown.addEventListener("click", moveDown);
btnRight.addEventListener("click", moveRight);

function levelWin() {
  console.log("subiste de nivel");
  level++;
  startGame();
}

function gameWin() {
  console.log("terminaste el juego");
  clearInterval(timeInterval);
}

function levelFail() {
  lives--;

  if (lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

function showLives() {
  spanLives.innerHTML = "";
  spanLives.innerHTML = emojis["HEART"].repeat(lives);
}

function showTime() {
  spanTime.innerHTML = ((Date.now() - timeStart) / 1000).toFixed(1);
}

function movePlayer() {
  const giftCollision = {
    colissionOnX: playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3),
    colissionOnY: playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3),
  };

  if (giftCollision.colissionOnX && giftCollision.colissionOnY) {
    levelWin();
  }

  const enemyCollision = enemiesPositions.find((enemy) => {
    if (
      enemy.x.toFixed(3) == playerPosition.x.toFixed(3) &&
      enemy.y.toFixed(3) == playerPosition.y.toFixed(3)
    ) {
      return true;
    }
  });

  if (enemyCollision) {
    levelFail();
  }

  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function moveUp() {
  if (playerPosition.y - elementSize < elementSize) {
  } else {
    playerPosition.y -= elementSize;
    startGame();
  }
}

function moveLeft() {
  if (playerPosition.x - elementSize < elementSize) {
  } else {
    playerPosition.x -= elementSize;
    startGame();
  }
}

function moveDown() {
  if (playerPosition.y + elementSize > canvasSize) {
  } else {
    playerPosition.y += elementSize;
    startGame();
  }
}

function moveRight() {
  if (playerPosition.x + elementSize > canvasSize) {
  } else {
    playerPosition.x += elementSize;
    startGame();
  }
}

function moveByKeys(event) {
  if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
}

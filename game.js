const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnDown = document.querySelector("#down");
const btnRight = document.querySelector("#right");

let canvasSize;
let elementSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", setCanvasSize);

window.addEventListener("resize", setCanvasSize);

function startGame() {
  game.font = elementSize * 0.8 + "px Verdana";
  game.fillStyle = "blue";
  game.textAlign = "end";

  const map = maps[0];
  const mapRows = map.trim().split("\n");
  const mapRowsCols = mapRows.map((row) => row.trim().split(""));

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

function movePlayer() {
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function moveUp() {
  console.log("Up");

  if (playerPosition.y - elementSize < elementSize) {
  } else {
    playerPosition.y -= elementSize;
    startGame();
  }
}

function moveLeft() {
  console.log("Left");

  if (playerPosition.x - elementSize < elementSize) {
  } else {
    playerPosition.x -= elementSize;
    startGame();
  }
}

function moveDown() {
  console.log("Down");

  if (playerPosition.y + elementSize > canvasSize) {
  } else {
    playerPosition.y += elementSize;
    startGame();
  }
}

function moveRight() {
  console.log("Right");

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

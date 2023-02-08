const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementSize;

window.addEventListener("load", setCanvasSize);

window.addEventListener("resize", setCanvasSize);

function startGame() {
  game.font = elementSize * 0.8 + "px Verdana";
  game.fillStyle = "blue";
  game.textAlign = "end";

  const map = maps[0];
  const mapRows = map.trim().split("\n");
  const mapRowsCols = mapRows.map((row) => row.trim().split(""));

  mapRowsCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      game.fillText(emoji, posX, posY);
      console.log(col);
    });
  });

  /*   for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      game.fillText(
        emojis[mapRowsCols[i - 1][j - 1]],
        elementSize * j,
        elementSize * i
      );
    }
  } */
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

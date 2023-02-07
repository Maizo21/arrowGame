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

  for (let i = 0; i <= 10; i++) {
    game.fillText(emojis["X"], elementSize, elementSize * i);
  }
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

const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
  /*   game.fillRect(0, 0, 100, 100); */
  game.font = "25px Verdana";
  game.fillStyle = "blue";
  game.textAlign = "center";
  game.fillText("Hernan", 60, 40);
}

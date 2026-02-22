import "./assets/style.css";
import { createBoard } from "./components/board";
import { renderBoard } from "./components/render";
import { handleAttack } from "./controllers/handlers";
import { human, robot } from "./core/player";

const main = document.querySelector("main");
const message = document.getElementById("message");

const humanBoard = createBoard(human);
const robotBoard = createBoard(robot);

main.insertBefore(humanBoard, message);
main.insertBefore(robotBoard, message);

human.gameBoard.place(human.gameBoard.fleet[6], 0, 2, "y");
robot.gameBoard.place(robot.gameBoard.fleet[8], 7, 5, "x");

renderBoard(human);
renderBoard(robot);

// Event delegation
document.addEventListener("click", (event) => {
  const robotPlayer = "[data-player='robot']";
  const robotBoard = event.target.closest(robotPlayer);

  if (robotBoard) {
    const board = document.querySelector(robotPlayer);
    board.addEventListener("click", handleAttack);
    return;
  }
});

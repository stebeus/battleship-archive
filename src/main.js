import "./assets/style.css";
import { human, robot } from "./core/player";
import { createBoard, handleAttack, updateBoard } from "./ui";

const main = document.querySelector("main");
const message = document.getElementById("message");

const humanBoard = createBoard(human);
const robotBoard = createBoard(robot);

main.insertBefore(humanBoard, message);
main.insertBefore(robotBoard, message);

human.gameBoard.place(human.gameBoard.fleet[6], 0, 2, "y");
robot.gameBoard.place(robot.gameBoard.fleet[8], 7, 5, "x");

updateBoard(human);
updateBoard(robot);

// Event delegation
document.addEventListener("click", (event) => {
  const robotBoard = event.target.closest("#robot");

  if (robotBoard) {
    const board = document.getElementById("robot");
    board.addEventListener("click", handleAttack);
    return;
  }
});

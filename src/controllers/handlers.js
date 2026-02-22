import { updateBoard } from "../components/render";
import { robot } from "../core/player";

function getCoordinates(event) {
  const cell = event.target.closest(".grid__cell");
  if (!cell) return;

  const coordinates = cell.getAttribute("data-coords").split(",").map(Number);

  return coordinates;
}

function handleAttack(event) {
  const [row, column] = getCoordinates(event);
  robot.gameBoard.receiveAttack(row, column);
  updateBoard(robot);
}

export { handleAttack };

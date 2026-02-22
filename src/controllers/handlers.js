import { renderBoard } from "../components/render";
import { robot } from "../core/player";
import { getCoordinates } from "../helpers/coord-getter";

function handleAttack(event) {
  const [row, column] = getCoordinates(event);
  robot.gameBoard.receiveAttack(row, column);
  renderBoard(robot);
}

export { handleAttack };

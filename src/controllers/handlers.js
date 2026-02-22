import { renderGrid } from "../components/render";
import { robot } from "../core/player";
import { getCellCoordinates } from "../helpers/coord-getter";

function handleAttack(event) {
  const [row, column] = getCellCoordinates(event);
  robot.gameBoard.receiveAttack(row, column);
  renderGrid(robot);
}

export { handleAttack };

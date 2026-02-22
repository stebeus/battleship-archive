import { Ship } from "../core/ship";
import { getCellCoordinates } from "../helpers/coord-getter";

class CellStyle {
  constructor(className, condition) {
    this.className = className;
    this.condition = condition;
  }
}

function modifyCell(cell, coordinates, className) {
  const dataCoords = cell.dataset.coords;

  if (dataCoords === coordinates) {
    cell.classList.add(`grid__cell--${className}`);
  }
}

function renderGrid({ name, gameBoard: { grid } }) {
  const player = `[data-player="${name}"]`;
  const board = document.querySelector(player);
  const cells = board.querySelectorAll(".grid__cell");

  cells.forEach((cellDiv) => {
    const dataCoords = cellDiv.dataset.coords;

    const [row, column] = getCellCoordinates(cellDiv);
    const cell = grid[row][column];

    const ship = new CellStyle("ship", cell instanceof Ship);
    const hit = new CellStyle("hit", cell === "h");
    const miss = new CellStyle("miss", cell === "m");

    if (ship.condition) modifyCell(cellDiv, dataCoords, ship.className);
    if (hit.condition) modifyCell(cellDiv, dataCoords, hit.className);
    if (miss.condition) modifyCell(cellDiv, dataCoords, miss.className);
  });
}

export { renderGrid };

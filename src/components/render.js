import { Ship } from "../core/ship";
import { getCellCoordinates } from "../helpers/coord-getter";

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

    const ship = { className: "ship", condition: cell instanceof Ship };
    const hit = { className: "hit", condition: cell === "h" };
    const miss = { className: "miss", condition: cell === "m" };

    if (ship.condition) modifyCell(cellDiv, dataCoords, ship.className);
    if (hit.condition) modifyCell(cellDiv, dataCoords, hit.className);
    if (miss.condition) modifyCell(cellDiv, dataCoords, miss.className);
  });
}

export { renderGrid };

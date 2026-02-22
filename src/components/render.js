import { Ship } from "../core/ship";

function modifyCell(cell, coordinates, className) {
  const dataCoords = cell.dataset.coords;

  if (dataCoords === coordinates) {
    cell.classList.add(`grid__cell--${className}`);
  }
}

function renderBoard({ name, gameBoard: { grid } }) {
  const player = `[data-player="${name}"]`;
  const board = document.querySelector(player);
  const cells = board.querySelectorAll(".grid__cell");

  cells.forEach((cellDiv) => {
    const dataCoords = cellDiv.dataset.coords;

    const [row, column] = dataCoords.split(",").map(Number);
    const cell = grid[row][column];

    const miss = "m";
    const hit = "h";

    if (cell instanceof Ship) modifyCell(cellDiv, dataCoords, "ship");
    if (cell === miss) modifyCell(cellDiv, dataCoords, "miss");
    if (cell === hit) modifyCell(cellDiv, dataCoords, "hit");
  });
}

export { renderBoard };

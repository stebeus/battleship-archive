import { Ship } from "../core/ship";

function modifyCell(cell, position, className) {
  const dataCoords = cell.dataset.coords;

  if (dataCoords === position) {
    cell.classList.add(`grid__cell--${className}`);
  }
}

function renderBoard({ name, gameBoard: { grid } }) {
  const player = `[data-player="${name}"]`;
  const board = document.querySelector(player);
  const cells = board.querySelectorAll(".grid__cell");

  const rows = grid.length;
  const columns = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const cell = grid[row][column];
      const miss = "m";
      const hit = "h";

      if (cell instanceof Ship) modifyCell(row, column, cells, "ship");
      if (cell === miss) modifyCell(row, column, cells, "miss");
      if (cell === hit) modifyCell(row, column, cells, "hit");
    }
  }
}

export { renderBoard };

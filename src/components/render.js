import { Ship } from "../core/ship";

function renderCell(row, column, cells, classModifier) {
  const position = `${row},${column}`;

  cells.forEach((cell) => {
    const coordinates = cell.dataset.coords;

    if (coordinates === position) {
      cell.classList.add(`grid__cell--${classModifier}`);
    }
  });
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

      if (cell instanceof Ship) renderCell(row, column, cells, "ship");
      if (cell === miss) renderCell(row, column, cells, "miss");
      if (cell === hit) renderCell(row, column, cells, "hit");
    }
  }
}

export { renderBoard };

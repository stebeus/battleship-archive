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

    const cellStyles = [
      new CellStyle("ship", cell instanceof Ship),
      new CellStyle("hit", cell === "h"),
      new CellStyle("miss", cell === "m"),
    ];

    if (cellStyles[0].condition)
      modifyCell(cellDiv, dataCoords, cellStyles[0].className);

    if (cellStyles[1].condition)
      modifyCell(cellDiv, dataCoords, cellStyles[1].className);

    if (cellStyles[2].condition)
      modifyCell(cellDiv, dataCoords, cellStyles[2].className);
  });
}

export { renderGrid };

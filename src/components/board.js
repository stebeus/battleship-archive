const template = document.getElementById("board-template");

function createGrid(element, grid) {
  const rows = grid.length;
  const columns = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const cell = element.querySelector(".grid__cell").cloneNode(true);

      const position = `${row},${column}`;
      cell.dataset.coordinates = position;

      element.append(cell);
    }
  }

  element.firstElementChild.remove();
  return element;
}

function createBoard({ name, gameBoard: { grid } }) {
  const content = template.content.cloneNode(true);

  const board = content.querySelector(".board");
  const playerName = content.querySelector(".board__player-name");
  const playerGrid = content.querySelector(".grid");

  board.id = name;
  playerName.textContent = name;

  createGrid(playerGrid, grid);

  return content;
}

export { createBoard };

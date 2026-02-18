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

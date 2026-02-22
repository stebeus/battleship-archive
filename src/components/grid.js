function createGrid(grid, parent) {
  const rows = grid.length;
  const columns = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const cell = parent.querySelector(".grid__cell").cloneNode(true);

      const coordinates = `${row},${column}`;
      cell.dataset.coordinates = coordinates;

      parent.append(cell);
    }
  }

  parent.firstElementChild.remove();
  return parent;
}

export { createGrid };

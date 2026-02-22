function createGrid(element, grid) {
  const rows = grid.length;
  const columns = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const cell = element.querySelector(".grid__cell").cloneNode(true);

      const coordinates = `${row},${column}`;
      cell.dataset.coordinates = coordinates;

      element.append(cell);
    }
  }

  element.firstElementChild.remove();
  return element;
}

export { createGrid };

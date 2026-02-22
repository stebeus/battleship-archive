function createGrid(element, grid) {
  for (const row in grid) {
    for (const column in grid[row]) {
      const cell = element.querySelector(".grid__cell").cloneNode(true);

      const coordinates = `${row},${column}`;
      cell.dataset.coords = coordinates;

      element.append(cell);
    }
  }

  element.firstElementChild.remove();
  return element;
}

export { createGrid };

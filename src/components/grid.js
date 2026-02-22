function createGrid(element, grid) {
  for (const row in grid) {
    for (const column in grid[row]) {
      const cell = element.querySelector(".grid__cell");
      const clone = cell.cloneNode(true);

      const coordinates = `${row},${column}`;
      clone.dataset.coords = coordinates;

      element.append(clone);
    }
  }

  element.firstElementChild.remove();
  return element;
}

export { createGrid };

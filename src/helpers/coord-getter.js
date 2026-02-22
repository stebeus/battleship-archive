function getCoordinates(event) {
  const cell = event.target.closest(".grid__cell");
  if (!cell) return;

  const coordinates = cell.getAttribute("data-coords").split(",").map(Number);

  return coordinates;
}

export { getCoordinates };

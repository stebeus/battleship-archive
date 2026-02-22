function getCoordinates(event) {
  const cell = event.target.closest(".grid__cell");
  if (!cell) return;

  const dataCoords = cell.dataset.coords;
  const coordinates = dataCoords.split(",").map(Number);

  return coordinates;
}

export { getCoordinates };

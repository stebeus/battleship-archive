function getCoordinates(element) {
  const dataCoords = element.dataset.coords;
  const coordinates = dataCoords.split(",").map(Number);

  return coordinates;
}

export { getCoordinates };

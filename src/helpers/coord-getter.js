const getCoordinates = (element) => element.dataset.coords;

const parseCoordinates = (attributeValue) =>
  attributeValue.split(",").map(Number);

export { getCoordinates as getCellCoordinates, parseCoordinates };

import { Ship } from "./ship";

function createFlotilla(quantity = 1, shipLength = 1) {
  const flotilla = [];

  for (let unit = 0; unit < quantity; unit++) {
    const ship = new Ship(shipLength);
    flotilla.push(ship);
  }

  return flotilla;
}

export { createFlotilla };

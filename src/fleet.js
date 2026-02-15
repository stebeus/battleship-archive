import { Ship } from "./ship";

function createFlotilla(quantity = 1, shipLength = 1) {
  const flotilla = [];

  for (let unit = 0; unit < quantity; unit++) {
    const ship = new Ship(shipLength);
    flotilla.push(ship);
  }

  return flotilla;
}

function createFleet(quantity) {
  const fleet = [];
  let shipLength = 1;

  for (let unit = quantity; unit > 0; unit--) {
    const flotilla = createFlotilla(quantity--, shipLength++);
    fleet.push(flotilla);
  }

  return fleet.flat();
}

export { createFleet, createFlotilla };

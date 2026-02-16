import { createFleet } from "./fleet";
import { createGrid } from "./grid";
import { Ship } from "./ship";

class GameBoard {
  #empty = 0;

  constructor() {
    this.grid = createGrid(10, 10);
    this.fleet = createFleet(4);
  }

  place(ship, row, column, axis) {
    const cell = this.grid[row][column];
    if (cell !== this.#empty) return;

    for (let cell = 0; cell < ship.length; cell++) {
      if (axis === "x") this.grid[row][column++] = ship;
      if (axis === "y") this.grid[row++][column] = ship;
    }
  }

  receiveAttack(row, column) {
    const cell = this.grid[row][column];

    if (cell === this.#empty) this.grid[row][column] = "m";

    if (cell instanceof Ship) {
      this.grid[row][column] = "h";
      cell.hit();
    }
  }

  isFleetSunk() {
    const isNotShip = (cell) => !(cell instanceof Ship);
    return this.grid.every((row) => row.every(isNotShip));
  }
}

export { GameBoard };

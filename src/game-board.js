import { createFleet } from "./fleet";
import { createGrid } from "./grid";
import { Ship } from "./ship";

class GameBoard {
  #empty = 0;

  constructor() {
    this.grid = createGrid(10, 10);
    this.fleet = createFleet(4);
  }

  #isCellEmpty(row, column) {
    const cell = this.grid[row][column];
    return cell === this.#empty;
  }

  place(ship, row, column, axis) {
    if (!this.#isCellEmpty(row, column)) return;

    for (let cell = 0; cell < ship.length; cell++) {
      if (axis === "x") this.grid[row][column++] = ship;
      if (axis === "y") this.grid[row++][column] = ship;
    }
  }

  receiveAttack(row, column) {
    const cell = this.grid[row][column];
    const miss = "m";
    const hit = "h";

    if (this.#isCellEmpty(row, column)) this.grid[row][column] = miss;

    if (cell instanceof Ship) {
      this.grid[row][column] = hit;
      cell.hit();
    }
  }

  isFleetSunk() {
    const isNotShip = (cell) => !(cell instanceof Ship);
    return this.grid.every((row) => row.every(isNotShip));
  }
}

export { GameBoard };

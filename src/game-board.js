import { createGrid } from "./grid";
import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.grid = createGrid(10, 10);
    this.fleet = [
      new Ship(2),
      new Ship(3),
      new Ship(3),
      new Ship(4),
      new Ship(5),
    ];
  }

  place(ship, row, column, axis) {
    for (let cell = 0; cell < ship.length; cell++) {
      if (axis === "x") this.grid[row][column++] = ship;
      if (axis === "y") this.grid[row++][column] = ship;
    }
  }

  receiveAttack(row, column) {
    const cell = this.grid[row][column];

    if (cell === 0) this.grid[row][column] = "m";

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

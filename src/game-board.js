import { createGrid } from "./grid";
import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.grid = createGrid(10, 10);
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  place(ship, row, column, direction = "horizontal") {
    for (let cell = 0; cell < ship.length; cell++) {
      if (direction === "horizontal") {
        this.grid[row][column++] = ship;
      }

      if (direction === "vertical") {
        this.grid[row++][column] = ship;
      }
    }
  }

  receiveAttack(row, column) {
    const cell = this.grid[row][column];

    if (cell === 0) this.grid[row][column] = "M";

    if (cell instanceof Ship) {
      this.grid[row][column] = "H";
      cell.hit();
    }
  }

  isFleetSunk() {
    const isNotShip = (cell) => !(cell instanceof Ship);
    return this.grid.every((row) => row.every(isNotShip));
  }
}

export { GameBoard };

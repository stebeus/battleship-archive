import { Ship } from "./ship";

function createBoard(rows = 1, columns = 1) {
  const board = [];
  const cell = 0;

  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let column = 0; column < columns; column++) {
      board[row][column] = cell;
    }
  }

  return board;
}

class GameBoard {
  constructor() {
    this.board = createBoard(10, 10);
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  placeShip(ship, row, column, direction = "horizontal") {
    for (let cell = 0; cell < ship.length; cell++) {
      if (direction === "horizontal") {
        this.board[row][column++] = ship;
      }

      if (direction === "vertical") {
        this.board[row++][column] = ship;
      }
    }
  }

  receiveAttack(row, column) {
    const cell = this.board[row][column];

    if (cell === 0) this.board[row][column] = "M";

    if (cell instanceof Ship) {
      this.board[row][column] = "H";
      cell.hit();
    }
  }

  reportSunkStatusOfAllShips() {
    const isNotInstanceOfShip = (cell) => !(cell instanceof Ship);
    return this.board.every((row) => row.every(isNotInstanceOfShip));
  }
}

export { createBoard, GameBoard };

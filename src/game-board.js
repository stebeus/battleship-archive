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
}

export { createBoard, GameBoard };

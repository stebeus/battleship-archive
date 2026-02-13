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

export { createBoard };

import { describe, expect, test } from "vitest";
import { createBoard, GameBoard } from "../game-board";

describe("Board creator", () => {
  const board = createBoard(10, 10);

  test("creates a 1 by 1 board by default", () => {
    expect(createBoard()).toStrictEqual([[0]]);
  });

  test("board has 10 rows", () => {
    expect(board).toHaveLength(10);
  });

  test("board has 10 columns", () => {
    expect(board[0]).toHaveLength(10);
  });

  test("all empty cell values are 0", () => {
    expect(board.every((row) => row.every((cell) => cell === 0)));
  });
});

const gameBoard = new GameBoard();
const destroyer = gameBoard.ships[4];

const horizontalPlacement = [
  [0, 0, 0],
  [0, destroyer, destroyer],
];

const verticalPlacement = [
  [0, destroyer, 0],
  [0, destroyer, 0],
];

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
});

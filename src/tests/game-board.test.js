import { describe, expect, test } from "vitest";
import { createBoard, GameBoard } from "../game-board";

describe("Board creator", () => {
  test("creates a 1 by 1 board by default", () => {
    expect(createBoard()).toStrictEqual([[0]]);
  });
});

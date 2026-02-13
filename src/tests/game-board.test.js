import { beforeEach, describe, expect, test } from "vitest";
import { createBoard, GameBoard } from "../game-board";

const gameBoard = new GameBoard();
const destroyer = gameBoard.ships[4];

describe("Ship placement", () => {
  const horizontalPlacement = [
    [0, 0, 0],
    [0, destroyer, destroyer],
  ];

  const verticalPlacement = [
    [0, destroyer, 0],
    [0, destroyer, 0],
  ];

  beforeEach(() => {
    gameBoard.board = createBoard(2, 3);
  });

  test("places ship horizontally by default", () => {
    gameBoard.placeShip(destroyer, 1, 1);
    expect(gameBoard.board).toStrictEqual(horizontalPlacement);
  });

  test("places ship vertically", () => {
    gameBoard.placeShip(destroyer, 0, 1, "vertical");
    expect(gameBoard.board).toStrictEqual(verticalPlacement);
  });
});

describe("Attack reception in board", () => {
  beforeEach(() => {
    gameBoard.board[1] = [0, destroyer, destroyer];
  });

  describe("Hit shots", () => {
    test("registers hit shots", () => {
      gameBoard.receiveAttack(1, 1);
      expect(gameBoard.board[1]).toStrictEqual([0, "H", destroyer]);
    });

    test("reduces damaged ship health", () => {
      expect(destroyer.health).toBe(1);
    });
  });

  test("registers missed shots", () => {
    gameBoard.receiveAttack(1, 0);
    expect(gameBoard.board[1]).toStrictEqual(["M", destroyer, destroyer]);
  });

  test("does nothing to registered shots", () => {
    for (let hit = 0; hit < destroyer.health; hit++) {
      gameBoard.receiveAttack(1, 0);
      gameBoard.receiveAttack(1, 1);
    }

    expect(gameBoard.board[1]).toStrictEqual(["M", "H", destroyer]);
  });
});

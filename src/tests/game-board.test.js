import { beforeEach, describe, expect, test } from "vitest";
import { createBoard } from "../board";
import { GameBoard } from "../game-board";
import { Ship } from "../ship";

const gameBoard = new GameBoard();
const ship = new Ship(2);

describe("Ship placement", () => {
  const horizontalPlacement = [
    [0, 0, 0],
    [0, ship, ship],
  ];

  const verticalPlacement = [
    [0, ship, 0],
    [0, ship, 0],
  ];

  beforeEach(() => {
    gameBoard.board = createBoard(2, 3);
  });

  test("places ship horizontally by default", () => {
    gameBoard.place(ship, 1, 1);
    expect(gameBoard.board).toStrictEqual(horizontalPlacement);
  });

  test("places ship vertically", () => {
    gameBoard.place(ship, 0, 1, "vertical");
    expect(gameBoard.board).toStrictEqual(verticalPlacement);
  });
});

describe("Attack reception in board", () => {
  beforeEach(() => {
    gameBoard.board[1] = [0, ship, ship];
  });

  describe("Hit shots", () => {
    test("registers hit shots", () => {
      gameBoard.receiveAttack(1, 1);
      expect(gameBoard.board[1]).toStrictEqual([0, "H", ship]);
    });

    test("reduces damaged ship health", () => {
      expect(ship.health).toBe(1);
    });
  });

  test("registers missed shots", () => {
    gameBoard.receiveAttack(1, 0);
    expect(gameBoard.board[1]).toStrictEqual(["M", ship, ship]);
  });

  test("does nothing to registered shots", () => {
    for (let hit = 0; hit < ship.health; hit++) {
      gameBoard.receiveAttack(1, 0);
      gameBoard.receiveAttack(1, 1);
    }

    expect(gameBoard.board[1]).toStrictEqual(["M", "H", ship]);
  });
});

describe("Sinking of all ships", () => {
  beforeEach(() => {
    gameBoard.board = createBoard(5, 5);
  });

  test("returns false if all ships are not sunk", () => {
    gameBoard.place(ship, 0, 1);
    gameBoard.place(ship, 2, 3, "vertical");
    expect(gameBoard.reportSunkStatusOfAllShips()).toBe(false);
  });

  test("returns true if all ships are sunk", () => {
    expect(gameBoard.reportSunkStatusOfAllShips()).toBe(true);
  });
});

import { beforeEach, describe, expect, test } from "vitest";
import { GameBoard } from "../game-board";
import { Ship } from "../ship";

const gameBoard = new GameBoard();
const ship = new Ship(2);

describe("GameBoard.place", () => {
  beforeEach(() => {
    gameBoard.grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  });

  const horizontalPlacement = [
    [0, 0, 0],
    [0, ship, ship],
    [0, 0, 0],
  ];

  const verticalPlacement = [
    [0, 0, 0],
    [0, ship, 0],
    [0, ship, 0],
  ];

  test("places ship horizontally by default", () => {
    gameBoard.place(ship, 1, 1);
    expect(gameBoard.grid).toStrictEqual(horizontalPlacement);
  });

  test("places ship vertically", () => {
    gameBoard.place(ship, 1, 1, "y");
    expect(gameBoard.grid).toStrictEqual(verticalPlacement);
  });
});

describe("GameBoard.receiveAttack", () => {
  beforeEach(() => {
    gameBoard.grid[0] = [0, ship, ship];
  });

  describe("Hit shots", () => {
    test("registers hit shots", () => {
      gameBoard.receiveAttack(0, 1);
      expect(gameBoard.grid[0]).toStrictEqual([0, "h", ship]);
    });

    test("reduces targeted ship health", () => {
      expect(ship.health).toBe(1);
    });
  });

  test("registers missed shots", () => {
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.grid[0]).toStrictEqual(["m", ship, ship]);
  });

  test("does not alter registered shots", () => {
    for (let hit = 0; hit < 2; hit++) {
      gameBoard.receiveAttack(0, 0);
      gameBoard.receiveAttack(0, 1);
    }

    expect(gameBoard.grid[0]).toStrictEqual(["m", "h", ship]);
  });
});

describe("GameBoard.isFleetSunk", () => {
  test("returns false if fleet is not sunk", () => {
    gameBoard.grid = [
      [0, ship, ship, 0],
      [0, 0, 0, 0],
      [0, 0, ship, 0],
      [0, 0, ship, 0],
    ];

    expect(gameBoard.isFleetSunk()).toBeFalsy();
  });

  test("returns true if fleet is sunk", () => {
    gameBoard.grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(gameBoard.isFleetSunk()).toBeTruthy();
  });
});

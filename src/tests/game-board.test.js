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
    gameBoard.place(ship, 1, 1, "vertical");
    expect(gameBoard.grid).toStrictEqual(verticalPlacement);
  });
});

describe("GameBoard.receiveAttack", () => {
  beforeEach(() => {
    gameBoard.grid[1] = [0, ship, ship];
  });

  describe("Hit shots", () => {
    test("registers hit shots", () => {
      gameBoard.receiveAttack(1, 1);
      expect(gameBoard.grid[1]).toStrictEqual([0, "H", ship]);
    });

    test("reduces damaged ship health", () => {
      expect(ship.health).toBe(1);
    });
  });

  test("registers missed shots", () => {
    gameBoard.receiveAttack(1, 0);
    expect(gameBoard.grid[1]).toStrictEqual(["M", ship, ship]);
  });

  test("does nothing to registered shots", () => {
    for (let hit = 0; hit < ship.health; hit++) {
      gameBoard.receiveAttack(1, 0);
      gameBoard.receiveAttack(1, 1);
    }

    expect(gameBoard.grid[1]).toStrictEqual(["M", "H", ship]);
  });
});

describe("GameBoard.isFleetSunk", () => {
  test("returns false if all ships are not sunk", () => {
    gameBoard.grid = [
      [0, ship, ship, 0],
      [0, 0, 0, 0],
      [0, 0, ship, 0],
      [0, 0, ship, 0],
    ];

    expect(gameBoard.isFleetSunk()).toBeFalsy();
  });

  test("returns true if all ships are sunk", () => {
    gameBoard.grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(gameBoard.isFleetSunk()).toBeTruthy();
  });
});

import { beforeEach, describe, expect, test } from "vitest";
import { Ship } from "../ship";

let ship;

beforeEach(() => {
  ship = new Ship();
});

test("creates ship of length 1 by default", () => {
  expect(ship).toHaveLength(1);
});

test("reduces ship health by 1 hit", () => {
  ship.hit();
  expect(ship.health).toBe(0);
});

describe("Ship sunk status", () => {
  test("returns false if ship is not sunk", () => {
    expect(ship.isSunk()).toBeFalsy();
  });

  test("returns true if ship is sunk", () => {
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});

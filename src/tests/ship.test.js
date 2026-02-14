import { beforeEach, describe, expect, test } from "vitest";
import { Ship } from "../ship";

let ship;

beforeEach(() => {
  ship = new Ship();
});

test("creates ship of length 1 by default", () => {
  expect(ship).toHaveLength(1);
});

describe("Ship.isWrecked", () => {
  test("returns false if ship is not wrecked", () => {
    expect(ship.isWrecked()).toBeFalsy();
  });

  test("returns true if ship is wrecked", () => {
    ship.hit();
    expect(ship.isWrecked()).toBeTruthy();
  });
});

describe("Ship.hit", () => {
  test("reduces ship health by 1 hit", () => {
    ship.health = 2;
    ship.hit();
    expect(ship.health).toBe(1);
  });

  test("stops reducing ship health when it is 0", () => {
    ship.health = 0;
    ship.hit();
    expect(ship.health).toBe(0);
  });
});

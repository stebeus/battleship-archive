import { beforeEach, describe, expect, test } from "vitest";
import { Ship } from "../ship";

let ship;

beforeEach(() => {
  ship = new Ship();
});

test("creates a ship of length one by default", () => {
  expect(ship).toHaveLength(1);
});

test("reduces ship health by one hit", () => {
  ship.hit();
  expect(ship.health).toBe(0);
});

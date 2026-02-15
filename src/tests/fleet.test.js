import { beforeEach, describe, expect, test } from "vitest";
import { createFleet, createFlotilla } from "../fleet";

describe("Flotilla", () => {
  let flotilla;

  describe("Default behavior", () => {
    beforeEach(() => {
      flotilla = createFlotilla();
    });

    test("creates a flotilla of 1 ship by default", () => {
      expect(flotilla).toHaveLength(1);
    });

    test("ship length is 1", () => {
      const isLengthOne = (ship) => ship.length === 1;
      expect(flotilla.every(isLengthOne)).toBeTruthy();
    });
  });

  beforeEach(() => {
    flotilla = createFlotilla(5, 5);
  });

  test("creates a flotilla of 5 ships", () => {
    expect(flotilla).toHaveLength(5);
  });

  test("all ship lengths are 5", () => {
    const isLengthFive = (ship) => ship.length === 5;
    expect(flotilla.every(isLengthFive)).toBeTruthy();
  });
});

test("creates a fleet with 1 ship by default", () => {
  const fleet = createFleet();
  expect(fleet).toHaveLength(1);
});

test("creates a fleet with no arrays", () => {
  const fleet = createFleet(5);
  const isArray = (item) => Array.isArray(item);
  expect(fleet.every(isArray)).toBeFalsy();
});

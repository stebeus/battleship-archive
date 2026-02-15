import { beforeEach, describe, expect, test } from "vitest";
import { createFlotilla } from "../fleet";

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

import { expect, test } from "vitest";
import { createFlotilla } from "../fleet";

const flotilla = createFlotilla();

test("creates a flotilla of 1 ship by default", () => {
  expect(flotilla).toHaveLength(1);
});

test("ship length is 1", () => {
  const isLengthOne = (ship) => ship.length === 1;
  expect(flotilla.every(isLengthOne)).toBeTruthy();
});

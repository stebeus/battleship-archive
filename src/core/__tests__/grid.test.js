import { expect, test } from "vitest";
import { createGrid } from "../grid";

const grid = createGrid(10, 10);

test("grid has 10 rows", () => {
  expect(grid).toHaveLength(10);
});

test("grid has 10 columns", () => {
  expect(grid[0]).toHaveLength(10);
});

test("all empty cell values are 0", () => {
  const isEmptyCellZero = (cell) => cell === 0;
  expect(grid.every((row) => row.every(isEmptyCellZero))).toBeTruthy();
});

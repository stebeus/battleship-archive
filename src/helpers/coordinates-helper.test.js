import { expect, it } from "vitest";
import { parseCoordinates } from "./coord-getter";

it("parses a string to an array of coordinates", () => {
  expect(parseCoordinates("0,0")).toStrictEqual([0, 0]);
});

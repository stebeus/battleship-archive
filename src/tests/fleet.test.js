import { expect, test } from "vitest";
import { createFlotilla } from "../fleet";

const flotilla = createFlotilla();

test("creates a flotilla of 1 ship by default", () => {
  expect(flotilla).toHaveLength(1);
});

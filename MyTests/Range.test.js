const { it, expect } = require("@jest/globals");
const rangeModified = require("./Range");

it("Range first test", () => {
  expect(rangeModified(5, 2, -1)).toBe([5, 4, 3, 2]);
});

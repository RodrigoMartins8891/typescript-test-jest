import { add } from '../src/ts/calc';

describe('Test CALC', () => {
  it("should return 15 for add (10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
});

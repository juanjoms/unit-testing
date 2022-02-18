import { divide, sum } from "./functions";

describe('Testing functions', () => {

  it('should sum two numbers', () => {
    const result = sum(5, 4);
    expect(result).toBe(9);
  });

  it('should divide two numbers', () => {
    const result = divide(10, 5);
    expect(result).toBe(2);
  });

  it('should divide two numbers, and return null when second param is 0', () => {
    const result = divide(10, 0);
    expect(result).toBeNull();
  });

});

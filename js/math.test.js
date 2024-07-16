const { add, substract, factorial, factorial_async } = require("./math");

//Addition
describe("Additions", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

//Substraction
describe("Substraction", () => {
  test("substracts 5 - 3 to equal 2", () => {
    expect(substract(5, 3)).toBe(2);
  });
});

//Factorial
describe("Factorial", () => {
  test("calculates factorial of 0 correctly", async () => {
    const result = await factorial_async(0);
    expect(result).toBe(1);
  });

  test("calculates factorial of 1 correctly", async () => {
    const result = await factorial_async(1);
    expect(result).toBe(1);
  });

  test("calculates factorial of 5 correctly", async () => {
    const result = await factorial_async(5);
    expect(result).toBe(120);
  });

  test("throws error for negative numbers", async () => {
    try {
      await factorial_async(-1);
    } catch (e) {
      expect(e.message).toBe("Negative numbers are not allowed.");
    }
  });

  test("calculates factorial of 10 correctly", async () => {
    const result = await factorial_async(10);
    expect(result).toBe(3628800);
  });

  test("returns a promise", () => {
    const result = factorial_async(5);
    expect(result).toBeInstanceOf(Promise);
  });
});

//Factorial async
describe("Factorial async", () => {
  test("calculates factorial of 0 correctly", async () => {
    const result = await factorial_async(0);
    expect(result).toBe(1);
  });

  test("calculates factorial of 1 correctly", async () => {
    const result = await factorial_async(1);
    expect(result).toBe(1);
  });

  test("calculates factorial of 5 correctly", async () => {
    const result = await factorial_async(5);
    expect(result).toBe(120);
  });

  test("throws error for negative numbers", async () => {
    try {
      await factorial_async(-1);
    } catch (e) {
      expect(e.message).toBe("Negative numbers are not allowed.");
    }
  });

  test("calculates factorial of 10 correctly", async () => {
    const result = await factorial_async(10);
    expect(result).toBe(3628800);
  });

  test("returns a promise", () => {
    const result = factorial_async(5);
    expect(result).toBeInstanceOf(Promise);
  });
});

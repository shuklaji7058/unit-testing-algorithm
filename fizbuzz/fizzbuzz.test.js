const fizzBuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });
  it("should return the number if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(17)).toEqual(17);
  });
  it("should return Fizz if divisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(12)).toEqual("Fizz");
  });
});

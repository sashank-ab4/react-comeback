import { sumOfTwo } from "../sumOfTwo";
test("This Sum Function should calculate the sum of two numbers", () => {
  const result = sumOfTwo(2, 8);

  //Assertion
  expect(result).toBe(10);
});

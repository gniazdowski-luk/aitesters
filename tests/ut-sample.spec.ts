import { test, expect } from "@playwright/test";


test.describe("Simple unit test (without browser)", () => {
  test("sum two numbers", async () => {
    // Arrange:
    const value1 = 1;
    const value2 = 2;
    const expectedSum = 3;


    // Act:
    const sum = value1 + value2;


    // Assert:
    expect(sum).toBe(expectedSum);
  });
});
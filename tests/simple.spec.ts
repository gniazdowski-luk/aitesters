import { test, expect } from "@playwright/test";


test.describe("Simple set of tests", () => {
  test("test 1", async ({ page }) => {
    // Arrange:
    const value1 = 1;
    const value2 = 2;
    const expectedSum = 3;


    // Act:
    const sum = value1 + value2;
    await page.waitForTimeout(1000);


    // Assert:
    expect(sum).toBe(expectedSum);
  });


  test("test 2", async ({ page }) => {
    // Arrange:
    const value1 = 2;
    const value2 = 2;
    const expectedSum = 4;


    // Act:
    const sum = value1 + value2;
    await page.waitForTimeout(1000);


    // Assert:
    expect(sum).toBe(expectedSum);
  });


  test("test 3", async ({ page }) => {
    // Arrange:
    const value1 = 3;
    const value2 = 2;
    const expectedSum = 5;


    // Act:
    const sum = value1 + value2;
    await page.waitForTimeout(1000);


    // Assert:
    expect(sum).toBe(expectedSum);
  });


  test("flaky test 1", async ({ page }) => {
    // Arrange:
    const value1 = 1;
    const value2 = 2;
    let expectedSum = 3;


    if (Math.random() < 0.5) {
      expectedSum = 4;
    }


    // Act:
    const sum = value1 + value2;
    await page.waitForTimeout(1000);
    expect(sum).toBe(expectedSum);
  });
});
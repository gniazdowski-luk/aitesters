import { test, expect } from "@playwright/test";


test.describe("Simple api test", () => {
  test("check api response", async ({ request }) => {
    // Act:
    const response = await request.get("/api");


    // Assert: check response to be 200
    expect(response.status()).toBe(200);
  });
});
import { test, expect } from "@playwright/test";


test.describe("Simple api test", () => {
  test("check api response", async ({ request, page }) => {
    // Act: open page and get API response
    await page.goto('/');
    const response = await request.get("/api");




    // Assert: check response to be 200
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/GAD/);
  });
});
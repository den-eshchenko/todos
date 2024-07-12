import { test, expect } from "@playwright/test"

test("Check count todos", async ({ page }) => {
  await page.goto("/")
  await page.getByPlaceholder("What needs to be done?").fill("1")
  await page.getByPlaceholder("What needs to be done?").press("Enter")
  await page.getByPlaceholder("What needs to be done?").fill("2")
  await page.getByPlaceholder("What needs to be done?").press("Enter")
  await page.getByText("1").click()
  await page.getByText("Active").click()
  const currentCount = await page.getByTestId("count_todos").textContent()

  expect(currentCount).toBe("1 items left")
})

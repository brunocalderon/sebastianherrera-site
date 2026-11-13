import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    document.querySelectorAll('[role="dialog"]').forEach((el) => el.remove());
  });
});

test("profile card screenshot", async ({ page }) => {
  const card = page.getByRole("article");
  await expect(card).toBeVisible();
  await page.waitForLoadState("networkidle");
  const project = test.info().project.name;
  await expect(card).toHaveScreenshot(`profile-card-${project}.png`, {
    animations: "disabled",
  });
});

test("external links resolve", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Link 1" })).toHaveAttribute(
    "href",
    "https://example.com/link-1",
  );
  await expect(page.getByLabel("Sebastian Herrera Instagram")).toHaveAttribute(
    "href",
    "https://www.instagram.com/__sebaherrera/",
  );
});

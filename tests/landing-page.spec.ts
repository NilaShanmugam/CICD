import { test } from "@playwright/test";
import { DraftHomePageActions } from "../page_actions/home.page.actions";

// Hooks to run before every test
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.daft.ie/");
  await page.click("text=Accept All");
});

test.describe("Verify Search & Filter functionality", () => {
  test("Validating whether filter is applied Properly and the result is populated as expected", async ({ page }) => {
    // You can give keyWords from here to Filter and Search
    const FilterAndSearchKeyWord = "garage";
    const cityName = "Dublin";
    const propertyPageActions = new DraftHomePageActions(page);
    await propertyPageActions.searchAndfilterValidation(
      cityName,
      FilterAndSearchKeyWord
    );
  });
});

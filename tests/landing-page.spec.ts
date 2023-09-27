import { test } from "@playwright/test";
import { DraftHomePageActions } from "../page_actions/home.page.actions";

// Hooks to run before every test
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.daft.ie/");
  await page.click("text=Accept All");
});

test.describe("Validating whether filter is applied Properly and the result is populated as expected", () => {
  test("Verify Search & Filter functionality  - Dublin & Garage", async ({
    page,
  }) => {
    // You can give keyWords from here to Filter and Search
    page.setDefaultTimeout(80000);
    const FilterAndSearchKeyWord = "garage";
    const cityName = "Dublin";
    const propertyPageActions = new DraftHomePageActions(page);
    await propertyPageActions.searchAndfilterValidation(
      cityName,
      FilterAndSearchKeyWord
    );
  });

  test("Verify Search & Filter functionality  - Dublin & Car Parking", async ({
    page,
  }) => {
    page.setDefaultTimeout(60000);
    const FilterAndSearchKeyWord = "car parking";
    const cityName = "Dublin";
    const propertyPageActions = new DraftHomePageActions(page);
    await propertyPageActions.searchAndfilterValidation(
      cityName,
      FilterAndSearchKeyWord
    );
  });

  test("Verify Search & Filter functionality  - Dublin & invalid Search key", async ({
    page,
  }) => {
    page.setDefaultTimeout(60000);
    const FilterAndSearchKeyWord = "invalid";
    const cityName = "Dublin";
    const propertyPageActions = new DraftHomePageActions(page);
    await propertyPageActions.searchAndfilterValidation(
      cityName,
      FilterAndSearchKeyWord
    );
  });
});

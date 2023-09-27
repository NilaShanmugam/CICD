import { test } from "@playwright/test";
import { DraftHomePageActions } from "../page_actions/home.page.actions";

// Hooks to run before every test
test.beforeEach(async ({ page }) => {
await page.goto("https://www.daft.ie/");
await page.click("text=Accept All");
page.setDefaultTimeout(60000);
});

test.describe("Verify Search & Filter functionality", () => {
  
 // You can give keyWords from here to Filter and Search
 [
 { city: 'Dublin', searchKey: 'garage' },
 { city: 'Dublin', searchKey: 'car parking' },
 ].forEach((filter) => {
 test(`Filter values for city: ${filter.city} and searchKey: ${filter.searchKey}`, async ({ page }) => {
 const propertyPageActions = new DraftHomePageActions(page);

 await propertyPageActions.searchAndfilterValidation(
 filter.city,
 filter.searchKey
 );
})
 })
});


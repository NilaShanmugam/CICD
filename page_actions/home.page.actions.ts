import { expect, Page } from "@playwright/test";
import { DraftHomePage } from "../page_objects/home.page";

export class DraftHomePageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async searchAndfilterValidation(cityName, FilterAndSearchKeyWord) {
    console.log(" City Name ===> " + cityName);
    console.log(" Search/Filter Key ===> " + FilterAndSearchKeyWord);

    const propertyPage = new DraftHomePage(this.page);

    // Checking for the visibility of the SearchBox in home page and entering the value "Dublin" in the searchBox and clicking it
    await propertyPage.searchBox.waitFor({ state: "visible" });
    await propertyPage.searchBox.fill(cityName);
    await propertyPage.cityName.click();

    await propertyPage.resultValue.waitFor({ state: "visible" });
    const beforeFilterCount = await propertyPage.resultValue.allTextContents();

    console.log(" Before Applying filter with KeyWord Garage Count is ===> " + beforeFilterCount);

    // Checking for the visibility of FILTER button and clicking it
    await propertyPage.filters.waitFor({ state: "visible" });
    await propertyPage.filters.click();

    // SCROLLING down and checking for the visibility of Keyword search box
    await propertyPage.page.mouse.down();
    await propertyPage.keyWordSearch.waitFor({ state: "visible" });

    //Filtering using the keyword "Garage" and clicking on ShowResults button

    await propertyPage.keyWordSearch.fill(FilterAndSearchKeyWord);
    await propertyPage.page.waitForTimeout(1000);
    await propertyPage.showResultsButton.waitFor({ state: "visible" });
    await propertyPage.showResultsButton.click();

    // It is taking 2-3 seconds for the value to get updated so introduced a wait
    await propertyPage.page.waitForTimeout(3000);

    //Checking for the visiblity of Heading which shows the Properties for Sale Results Count
    await propertyPage.resultValue.waitFor({ state: "visible" });
    const afterFilterCount = await propertyPage.resultValue.allTextContents();

    console.log(" After Applying filter with KeyWord Garage Count is ===> " + afterFilterCount);

    // Navigating to the first property of the list
    await propertyPage.firstPropertyOfTheResult.waitFor({ state: "visible" });
    await propertyPage.firstPropertyOfTheResult.click();
    await propertyPage.page.waitForTimeout(4000);

    // Scrolling down to the desctiption and extracting the text
    await propertyPage.page.mouse.down();
    const pageContent = await propertyPage.descriptionText.allTextContents();

    // Checking whether the property description contains the keyWord "garage"

    var description = `${pageContent}`;

    var SearchTextVisibility = false;

    if (new RegExp("\\b" + FilterAndSearchKeyWord + "\\b").test(description.valueOf())) {
      SearchTextVisibility = true;
    } else {
      SearchTextVisibility = false;
    }
    console.log(" Search Text garage is visible in description ==>" + SearchTextVisibility);

    //Asserting whether the description contains the keyword "garage"

    expect(SearchTextVisibility).toBeTruthy();
  }
}

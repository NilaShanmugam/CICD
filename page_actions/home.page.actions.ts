import { expect, Page } from "@playwright/test";
import { DraftHomePage } from "../page_objects/home.page";

export class DraftHomePageActions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async searchAndfilterValidation(cityName, FilterAndSearchKeyWord) {
    console.log(` City name is  ==>` + cityName);
    console.log(` Filter And Search keyword is  ==>` + FilterAndSearchKeyWord);

    const propertyPage = new DraftHomePage(this.page);

    // Checking for the visibility of the SearchBox in home page and entering the value of cityName in the searchBox and clicking it
    await propertyPage.searchBox.waitFor({ state: "visible" });
    await propertyPage.searchBox.fill(cityName);
    await propertyPage.cityName.click();

    await propertyPage.resultValue.waitFor({ state: "visible" });
    const beforeFilterCount = await propertyPage.resultValue.allTextContents();

    console.log(
      ` Before applying the filter ${FilterAndSearchKeyWord} the count is  ==>` +
        beforeFilterCount
    );

    // Checking for the visibility of FILTER button and clicking it
    await propertyPage.filters.waitFor({ state: "visible" });
    await propertyPage.filters.click();

    // SCROLLING down and checking for the visibility of Keyword search box
    await propertyPage.page.mouse.down();
    await propertyPage.keyWordSearch.waitFor({ state: "visible" });

    //Filtering using the FilterAndSearchKeyWord and clicking on ShowResults button

    await propertyPage.keyWordSearch.fill(FilterAndSearchKeyWord);
    await propertyPage.page.waitForTimeout(1000);
    await propertyPage.showResultsButton.waitFor({ state: "visible" });
    await propertyPage.showResultsButton.click();

    // It is taking 3-5 seconds for the value to get updated so introduced a wait
    await propertyPage.page.waitForTimeout(5000);

    //Checking for the visiblity of Heading which shows the Properties for Sale Results Count
    await propertyPage.resultValue.waitFor({ state: "visible" });
    const afterFilterCount = await propertyPage.resultValue.allTextContents();

    console.log(
      ` After applying the filter ${FilterAndSearchKeyWord} the count is  ==>` +
        afterFilterCount
    );

    if (FilterAndSearchKeyWord === "invalid") {
      await propertyPage.resultValue.waitFor({ state: "visible" });
      const propertyCount = await propertyPage.resultValue.allTextContents();

      var splitOnSpace = propertyCount.toString();
      var splittedArr = splitOnSpace.split(" ");
      var expectedCount = splittedArr[0];
      var actualCount = "0 Properties for Sale";

      // Asserting whethere the result count is properly generated
      expect(actualCount).toContain(expectedCount);
    } else {
      // Navigating to the first property of the list
      await propertyPage.firstPropertyOfTheResult.waitFor({ state: "visible" });
      await propertyPage.firstPropertyOfTheResult.click();
      await propertyPage.page.waitForTimeout(2000);

      // Scrolling down to the features and extracting the text
      await propertyPage.page.mouse.down();
      await propertyPage.page.waitForTimeout(3000);
      const pageContent = await propertyPage.features.allTextContents();

      // Checking whether the property featurs contains the FilterAndSearchKeyWord

      var features = `${pageContent}`;

      features = features.toLowerCase();

      var SearchTextVisibility = false;

      if (
        new RegExp("\\b" + FilterAndSearchKeyWord + "\\b").test(
          features.valueOf()
        )
      ) {
        SearchTextVisibility = true;
      } else {
        SearchTextVisibility = false;
      }
      console.log(
        ` Search Text ${FilterAndSearchKeyWord} is visible in description ==>` +
          SearchTextVisibility
      );

      //Asserting whether the description contains the FilterAndSearchKeyWord

      expect(SearchTextVisibility).toBeTruthy();
    }
  }
}

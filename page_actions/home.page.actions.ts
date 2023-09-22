import { test, expect, Page } from '@playwright/test';
import { DraftHomePage } from '../page_objects/home.page';

export class DraftHomePageActions {

readonly page: Page;

constructor(page: Page) {
this.page = page;
}

async searchAndfilterValidation(){
   
    const propertyPage = new DraftHomePage(this.page);
    
    // Checking for the visibility of the SearchBox in home page and entering the value "Dublin" in the searchBox 
    await propertyPage.searchBox.waitFor({state:"visible"});
    await propertyPage.searchBox.fill('Dublin'); 
    
    // Among the list of values generated picking the first value in the list
    await propertyPage.cityName.click();
    
    // Checking for the visibility of filter button and clicking it
    await propertyPage.filters.waitFor({state:"visible"});
    await propertyPage.filters.click();
    

    // Checking for the visibility of Keyword search box and filling it with the value "garage"
    await propertyPage.page.mouse.down();
    await propertyPage.keyWordSearch.waitFor({state:"visible"});
    await propertyPage.keyWordSearch.fill('garage');
    
    // Checking for the visiblity of "Show Results" button and Performing Click action
    await propertyPage.showResultsButton.waitFor({state:"visible"});
    await propertyPage.showResultsButton.click();
    
    // It is taking 2-3 seconds for the value to get updated so introduced a wait
    await propertyPage.page.waitForTimeout(2000);
    
    //Checking for the visiblity of Heading which shows the Properties for Sale Results Count
    await propertyPage.resultValue.waitFor({state:"visible"});
    const actualText = await propertyPage.resultValue.allTextContents();
    
    // Checking for the filter button count to cross-verify if both the value listed is same
    await propertyPage.filters.waitFor({state:"visible"});
    await propertyPage.filters.click();
    
    await propertyPage.showResultsButton.waitFor({state:"visible"});
    const expectedText = await propertyPage.showResultsButton.allTextContents();
    
    var splitOnSpace = expectedText.toString();
    var splittedArr = splitOnSpace.split(" ");   
    var expectedCount = splittedArr[2];   
    var actualCount = actualText.toString();
    
    console.log("ACTUAL COUNT ===> "+actualCount);
    //console.log(actualCount);

    console.log("COUNT DISPLAYED ===> "+splitOnSpace);
    //console.log(splitOnSpace);


    // Asserting whethere the result count is properly generated
    expect(actualCount).toContain(expectedCount);
    
    
    }
}
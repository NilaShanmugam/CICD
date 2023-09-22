# Distilled-Project
# Pre-Requisites:
1. Install Visual Studio Code(Preferred IDE - Optional)
2. Install NodeJS: Download and Install Node JS.
3. Clone this repository in local.
4. Enter the below command to start the Playwright installation. It creates Package.json, Installs npm library.
       ```npm init playwright@latest```                 
5. Using the below command, you can install all different browsers in Playwright. 
       ```npx playwright install```


# Folder Structure :
1. page_objects : Contains all the locators of the Home Page and Properties Page
2. page_actions : Contains the actions of all locators completing a test case scenario 
3. tests folder: This folder contains actual test scripts. It has landing-page.spec.ts file, where I have written the code playwright.config.ts: This is the global configuration file for the Playwright, which you can configure with available options.

# Test Execution and Results

1. You can run the test by single command in VS Code terminal. 
2. Playwright runs in headless mode by default, so we specify the –headed to run on headed mode.
       ```npx playwright test landing-page.spec.ts --headed```

3. To open last HTML report run, use below command
       ```npx playwright show-report```


![image](https://github.com/NilaShanmugam/Distilled-Project/assets/59618634/e61064ba-97c9-4b46-a37f-33a67e69a484)

![image](https://github.com/NilaShanmugam/Distilled-Project/assets/59618634/48f76c56-2acb-4a98-ac69-cd7ce2767063)


# CI/CD Pipeline Integration to my current Repo

1. Whenever there is new commit and changes are pushed to main branch "Actions" will be triggered automatically
2. We can trigger the run manually also by using "Rerun-Jobs" in Actions Tab

![image](https://github.com/NilaShanmugam/Distilled-PlayWright-CICD/assets/59618634/c3ad853c-9308-477e-896d-34bfdfeb8111)

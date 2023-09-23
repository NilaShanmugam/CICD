# Distilled-Project
# Pre-Requisites:
1. Install Visual Studio Code(Preferred IDE - Optional)
2. Install NodeJS: Download and Install Node JS. (Use Node Version >= 16.4.2 )
3. Clone this repository in local and open the project folder in VS Code Terminal / Command Prompt
4. Enter the below command in terminal, to start the Playwright installation. It creates Package.json, Installs npm library.


        ```npm init playwright@latest```

   1. While getting started with playwright it asks for few questions as below :
   2. Do you want to use TypeScript or JavaScript? · TypeScript
   3. Where to put your end-to-end tests? · e2e
   4. Add a GitHub Actions workflow? (y/N) · true
   5. Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true        


    [**Note** : **If firefox browser is not present in your system, a popUp as below will be shown, so click "cancel" button whenever it is shown** ]

   <img width="193" alt="Screenshot 2023-09-23 at 12 43 30 PM" src="https://github.com/NilaShanmugam/Distilled-PlayWright-CICD/assets/59618634/249c7ac0-253d-46f4-86dd-0ad5404f64b0">

6. Using the below command in terminal, you can install all different browsers in Playwright. 


       ```npx playwright install --with-deps```

# Folder Structure :

1. page_objects : Contains all the locators of the Home Page and Properties Page
2. page_actions : Contains the actions of all locators completing a test case scenario 
3. tests folder: This folder contains actual test scripts. It has landing-page.spec.ts file, where I have written the code
4. playwright.config.ts: This is the global configuration file for the Playwright, where you can configure with available options.

# Test Execution and Results

1. Open the directory in the command prompt / in VS Code terminal.
2. Navigate to the test folder inside the Project and then use the below command
3. Playwright runs in headless mode by default, so we specify the –headed to run on headed mode



       ```npx playwright test landing-page.spec.ts --headed```

4. To open last HTML report run, use below command



       ```npx playwright show-report```


![image](https://github.com/NilaShanmugam/Distilled-Project/assets/59618634/e61064ba-97c9-4b46-a37f-33a67e69a484)

![image](https://github.com/NilaShanmugam/Distilled-Project/assets/59618634/48f76c56-2acb-4a98-ac69-cd7ce2767063)


# CI/CD Pipeline Integration to my current Repo

1. Whenever there is new commit and changes are pushed to main branch "Actions" will be triggered automatically
2. We can trigger the run manually also by using "Rerun-Jobs" in Actions Tab

![image](https://github.com/NilaShanmugam/Distilled-PlayWright-CICD/assets/59618634/c3ad853c-9308-477e-896d-34bfdfeb8111)

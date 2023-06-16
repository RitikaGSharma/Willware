<h1>Web Automation using Playwright with JavaScript</h1>

This repository contains an automation assignment that covers web automation scenarios using Playwright with JavaScript. The assignment includes automating one login test scenario, the term and condition page and forgot password. The project follows the Page Object Model and utilizes Cucumber and Allure Report for test execution and reporting.
<h2>Pre-requisite</h2> </br>
Before running the tests, ensure you have the following prerequisites installed on your machine: </br>
Node.js (v12 or higher) </br>
NPM (Node Package Manager)</br>

<h3>Installation</h3></br>
Clone the repository to your local machine using the following command:</br>
git clone <repository-url> </br>
Navigate to the project directory:  </br>
cd project-directory </br>

<h4>Install the project dependencies by running the following command:</h4></br>
npm install

<h5>**Configuration**</h5></br>
Before running the tests, make sure to update the necessary configuration settings.</br>
Open the config.js file located in the config directory.</br>
Update the following properties with the appropriate values:</br>
baseUrl: The base URL of the application under test.</br>

<h6>**Test Data In Fixture**</h6></br>
username: The username for logging in.</br>
password: The password for logging in.</br>

<h7>Execution</h7></br>
Open a terminal or command prompt.</br>
Navigate to the project directory.</br>
Run the following command to execute the tests:</br>
npm test</br>
This command will trigger the execution of the test scenarios using Playwright.</br>

<h8>**Test Reports**</h8></br>
After the test execution is complete, the Allure Report will be generated. The report provides detailed information about the test results and can be accessed through a web browser.</br>
To view the Allure Report, perform the following steps:</br>
Open a terminal or command prompt.</br>
Navigate to the project directory.</br>
Run the following command to generate the Allure Report:</br>
npm run test:reporter</br>
Run the following command to open the Allure Report:</br>
npm run allure-report</br>
This command will start a local server and open the Allure Report in your default web browser. You can explore the report to view test execution details, including test steps, screenshots, and any associated error messages.</br>

<h9>**Test Flow**</h9></br>
The project covers the following test scenarios:</br>
Login Test - Valid Credentials: This scenario validates the successful login with valid credentials.</br>
Login Test - Invalid Credentials: This scenario validates the error message displayed when logging in with invalid credentials.</br>
Term and Condition Page: This scenario ensures that the term and condition page is displayed and accessible.</br>

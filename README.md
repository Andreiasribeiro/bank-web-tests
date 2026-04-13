# Bank Web Tests

## Objective

This project automates end-to-end testing for the bank web application from Julio de Lima's repositories using Cypress and JavaScript. The tests cover login functionality and money transfers, ensuring the application's reliability and user experience.

## Prerequisites

- Node.js (version 14 or higher recommended)
- The bank API must be running: [banco-api](https://github.com/juliodelimas/banco-apiRegras) (translated to English for these tests)
- The bank web application must be running: [banco-web](https://github.com/juliodelimas/banco-web) (translated to English for these tests)
- Both services should be accessible at `http://localhost:4000`
- **Note:** Some parts of Julio de Lima's original projects have been translated to English for these tests.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Andreiasribeiro/bank-web-tests.git
   cd bank-web-tests
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Project Structure

- `cypress/e2e/`: End-to-end test files
  - `login.cy.js`: Tests for login functionality (valid and invalid credentials)
  - `transfer.cy.js`: Tests for transfer functionality (valid transfers and error handling for large amounts)
- `cypress/fixtures/`: Test data files
  - `credentials.json`: Contains valid and invalid login credentials
- `cypress/support/commands/`: Custom Cypress commands organized by functionality
  - `common.js`: Common utility commands (toast messages, combo box selection)
  - `login.js`: Login-specific commands
  - `transfer.js`: Transfer-specific commands
- `cypress/reports/`: Generated test reports and assets
- `cypress/screenshots/` and `cypress/videos/`: Screenshots and videos from test runs

## Running Tests

- Open Cypress Test Runner (interactive mode):

  ```
  npm run cy:open
  ```

- Run all tests in headless mode:

  ```
  npm test
  ```

- Run tests in headed mode (visible browser):
  ```
  npm run cy:headed
  ```

## Custom Commands

The project uses custom Cypress commands to organize and reuse code across tests:

### Login Commands (`cypress/support/commands/login.js`)

- `cy.loginWithValidCredentials()`: Logs in using valid credentials from the fixtures file.
- `cy.loginWithInvalidCredentials()`: Logs in using invalid credentials to test error handling.

### Transfer Commands (`cypress/support/commands/transfer.js`)

- `cy.toMakeTransfer(sourceAccount, destinationAccount, amount)`: Performs a money transfer between specified accounts with the given amount.

### Common Commands (`cypress/support/commands/common.js`)

- `cy.checkMessageInToast(message)`: Verifies that a toast notification appears with the specified message.
- `cy.selectOptionFromComboBox(comboBoxSelector, optionText)`: Selects an option from a dropdown/combo box by its text.

## Reports

Test reports are generated using the `cypress-mochawesome-reporter` plugin. After test execution, view the detailed HTML report by opening `cypress/reports/html/index.html` in a web browser. The reports include test results, screenshots, and videos for failed tests.

## Test Scenarios

### Login Tests

- Successful login with valid credentials
- Failed login with invalid credentials, displaying appropriate error message

### Transfer Tests

- Successful transfer with valid details and amount ≤ $5000
- Error handling for transfers > $5000 without authentication token

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

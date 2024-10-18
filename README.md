
# Swag Labs Cypress Tests

This project contains end-to-end tests for the Swag Labs website using Cypress.

## Project Overview

The tests cover the following key areas:
- **Login functionality**: Tests various login scenarios, including valid and invalid credentials.
- **Product filtering**: Tests product filtering by price, name, etc.
- **Shopping cart**: Tests adding and removing products from the cart and the checkout process.
- **Menu functionality**: Tests the sidebar menu options like logout, reset app state, and navigation.
- **Logout functionality**: Verifies successful logout.

## Prerequisites

Before running the tests, make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **Cypress**: Installed as a dev dependency in this project.

To check if Node.js is installed, run the following command in your terminal:

```bash
node -v
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/swag-labs-cypress-tests.git
```

2. Navigate to the project directory:

```bash
cd swag-labs-cypress-tests
```

3. Install the dependencies:

```bash
npm install
```

This will install Cypress and all other required packages.

## Running Tests

To open the Cypress Test Runner, use the following command:

```bash
npx cypress open
```

This will launch the Cypress UI, where you can run individual test files.

Alternatively, you can run all tests headlessly with:

```bash
npx cypress run
```

## Test Structure

- **Login Tests**: Tests for logging in with valid, invalid, and missing credentials.
- **Filter Tests**: Tests product filtering by price (low to high, high to low) and name (A-Z, Z-A).
- **Cart and Checkout Tests**: Tests adding products to the cart and completing the checkout process.
- **Menu Tests**: Tests sidebar menu options (logout, reset app state, etc.).

## Folder Structure

```
/cypress
  /integration
    /tests
      - login.spec.js      // Login test cases
      - filter.spec.js     // Product filter test cases
      - checkout.spec.js   // Checkout process test cases
      - menu.spec.js       // Menu functionality test cases
  /support
    - commands.js         // Custom Cypress commands
    - index.js            // Global configurations
```

## License

This project is licensed under the MIT License.

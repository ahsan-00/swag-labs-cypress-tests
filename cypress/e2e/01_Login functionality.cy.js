describe('Swag Lab Login Test', () => {
  beforeEach(() => {
    // Visit the Swag Lab website before each test
    cy.visit('https://www.saucedemo.com/');
  });

  it('Should login successfully with valid credentials', () => {
    // Enter valid username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify successful login by checking the URL
    cy.url().should('include', '/inventory.html');
  });

  it('Should show error message for invalid credentials', () => {
    // Enter invalid username and password
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify that an error message is shown
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');
  });

  it('Should show error message when username is missing', () => {
    // Leave username empty and enter valid password
    cy.get('#password').type('secret_sauce');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify that an error message is shown
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required');
  });

  it('Should show error message when password is missing', () => {
    // Enter valid username and leave password empty
    cy.get('#user-name').type('standard_user');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify that an error message is shown
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');
  });

  it('Should show error message for locked out user', () => {
    // Enter credentials for the locked out user
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Verify that an error message is shown
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });
});

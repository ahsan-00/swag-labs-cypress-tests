describe('Swag Lab Menu Functionality Test', () => {
  beforeEach(() => {
    // Visit the Swag Lab website and log in
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html'); // Verify successful login
  });

  it('Should open the menu and navigate to "All Items"', () => {
    // Open the menu
    cy.get('#react-burger-menu-btn').click();

    // Click on "All Items" and verify it takes you to the inventory page
    cy.get('[data-test="inventory_sidebar_link"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Should navigate to "About" page from the menu', () => {
    // Open the menu
    cy.get('#react-burger-menu-btn').click();

    // Click on "About" and verify it takes you to the about page
    cy.get('[data-test="about_sidebar_link"]').click();
    cy.url().should('include', 'saucelabs.com');
  });

  it('Should reset app state via the menu', () => {
    // Add a product to the cart first
    cy.get('.inventory_item').first().within(() => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

    // Verify item is in the cart
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Open the menu and click "Reset App State"
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="reset_sidebar_link"]').click();

    // Verify the cart is empty after resetting app state
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('Should log out via the menu', () => {
    // Open the menu
    cy.get('#react-burger-menu-btn').click();

    // Click on "Logout" and verify it redirects to the login page
    cy.get('[data-test="logout_sidebar_link"]').click();
    cy.url().should('include', '/');
    cy.get('[data-test="login-button"]').should('be.visible'); // Verify login button is visible
  });
});

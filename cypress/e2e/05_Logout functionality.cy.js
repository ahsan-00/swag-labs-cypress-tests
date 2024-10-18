describe('Swag Lab Logout Test', () => {
    beforeEach(() => {
      // Visit the Swag Lab website and log in before each test
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');
    });
  
    it('Should log out successfully', () => {
      // Open the menu
      cy.get('#react-burger-menu-btn').click();
      
      // Click on "Logout" from the menu
      cy.get('[data-test="logout_sidebar_link"]').click();
  
      // Verify that the user is redirected to the login page
      cy.url().should('eq', 'https://www.saucedemo.com/');
      
      // Verify that the login button is visible on the login page
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });
  
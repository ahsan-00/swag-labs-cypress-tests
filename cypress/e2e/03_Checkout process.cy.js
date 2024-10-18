describe('Swag Lab Checkout Process', () => {
    beforeEach(() => {
      // Visit the Swag Lab website and log in
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('[data-test="login-button"]').click(); // Login
      cy.url().should('include', '/inventory.html'); // Verify successful login
    });
  
    it('Should add a product to the cart and complete the checkout process', () => {
      // Add the first product to the cart
      cy.get('.inventory_item').first().within(() => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Add to cart button for the first product
      });
  
      // Go to the cart page
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
  
      // Verify the product is in the cart
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  
      // Proceed to checkout
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
  
      // Fill in the checkout information
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
  
      // Continue to the next step of checkout
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
  
      // Verify that the summary contains the product
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  
      // Finish the checkout
      cy.get('[data-test="finish"]').click();
      cy.url().should('include', '/checkout-complete.html');
  
      // Verify order completion message
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');

      //Get back to the home.
      cy.get('[data-test=back-to-products]').click();
      cy.url().should('include', '/inventory.html'); 
    });
  });
  
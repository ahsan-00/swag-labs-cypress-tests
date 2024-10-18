describe('Swag Lab Filter Functionality Test', () => {
  beforeEach(() => {
    // Visit the Swag Lab website and log in
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should filter products by price (low to high)', () => {
    //Verify the successfull login.
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');

    // Select filter by 'Price (low to high)'
    cy.get('.product_sort_container').select('Price (low to high)');

    // Grab all the product prices
    cy.get('.inventory_item_price')
      .then(($prices) => {
        // Extract price values and convert them to a float array
        const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')));

        // Ensure the array is sorted in ascending order
        const sortedPrices = [...prices].sort((a, b) => a - b);

        // Assert that the prices are sorted in ascending order
        expect(prices).to.deep.equal(sortedPrices);
      });

    it('Should filter products by Price (high to low)', () => {
      // Select filter by 'Price (high to low)'
      cy.get('.product_sort_container').select('Price (high to low)');

      // Grab all the product prices
      cy.get('.inventory_item_price')
        .then(($prices) => {
          // Extract price values and convert them to a float array
          const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')));

          // Ensure the array is sorted in descending order
          const sortedPrices = [...prices].sort((a, b) => b - a);

          // Assert that the prices are sorted in descending order
          expect(prices).to.deep.equal(sortedPrices);
        });
    });
    it('Should filter products by Name (A to Z)', () => {
      // Select filter by 'Name (A to Z)'
      cy.get('.product_sort_container').select('Name (A to Z)');

      // Grab all the product names
      cy.get('.inventory_item_name')
        .then(($names) => {
          // Extract text values and convert them to an array
          const names = [...$names].map((name) => name.innerText);

          // Ensure the array is sorted alphabetically (A to Z)
          const sortedNames = [...names].sort();

          // Assert that the names are sorted in A to Z order
          expect(names).to.deep.equal(sortedNames);
        });
    });
    it('Should filter products by Name (Z to A)', () => {
      // Select filter by 'Name (Z to A)'
      cy.get('.product_sort_container').select('Name (Z to A)');

      // Grab all the product names
      cy.get('.inventory_item_name')
        .then(($names) => {
          // Extract text values and convert them to an array
          const names = [...$names].map((name) => name.innerText);

          // Ensure the array is sorted alphabetically (Z to A)
          const sortedNames = [...names].sort().reverse();

          // Assert that the names are sorted in Z to A order
          expect(names).to.deep.equal(sortedNames);
        });
    });
  });
});

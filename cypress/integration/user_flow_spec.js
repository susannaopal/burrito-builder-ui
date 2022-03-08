describe('User Flow View', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders)', {
      statusCode: 200,
      body: [{
        id: 1,
        name: "Pat",
        ingredients: [
        "beans",
        "lettuce",
        "carnitas",
        "queso fresco",
        "jalapeno"
        ]     
    }]
  })
    cy.visit('http://localhost:3000/');
});

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  });

  it('should be see a title at the top of the app', () => {
    cy.get('h1')
      .contains('Burrito Builder')
      .should('be.visible')
  })
});




// Write tests for the form and overall app user flows. Be sure to intercept the network requests.


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
  });
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
  });

  it('should see a form to make a burrito order with the user\'s name', () => {
    cy.get('form')
      .should('be.visible')
  });

  it('should see a card with an order from Pat', () => {
    cy.get(':nth-child(1) > .card')
      .get(':nth-child(1) > .card > h3')
      .contains('Pat')
      .get(':nth-child(1) > .card > .ingredient-list > :nth-child(1)')
      .contains('beans')
      .get(':nth-child(1) > .card > .ingredient-list > :nth-child(2)')
      .contains('lettuce')
      .get(':nth-child(1) > .card > .ingredient-list > :nth-child(3)')
      .contains('carnitas')
      .get(':nth-child(1) > .card > .ingredient-list > :nth-child(4)')
      .contains('queso fresco')
      .get(':nth-child(1) > .card > .ingredient-list > :nth-child(5)')
      .contains('jalapeno')
      .should('be.visible')
  });

  it('should see an input for the user\'s name', () => {
    cy.get('form')
      .get('input')
      .type('Susanna')
      .should('be.visible')
  });

  it('should see a selection of buttons of burrito ingredients to select for order and be able to submit', () => {
    cy.get('form')
      .get('[name="beans"]')
      .contains('beans')
      .should('be.visible')
      .click()
      .get('[name="queso fresco"]')
      .contains('queso fresco')
      .should('be.visible')
      .click()
      .get('[name="guacamole"]')
      .contains('guacamole')
      .should('be.visible')
      .click()
  });

  it('should see a button to submit order', () => {
    cy.get('form')
      .get('form > :nth-child(15)')
      .contains('Submit Order')
      .should('be.visible')
      .click()
  });

  it('should see a message if the name or an ingredient is missing when trying to submit without both', () => {
     cy.get('form')
    .contains('Submit Order')
    .should('be.visible')
    .click()
    .get('form > :nth-child(16)')
    .contains('Please make sure the form is filled out with both name and an ingredient.')
  });

  it('should see order cards', () => {
    cy.get('.App > :nth-child(2)')
      .get(':nth-child(1) > .card')
      .should('have.length', 1)
  });

  it('should see a posted order by Mary Cat', () => {
    cy.get(':nth-child(21) > .card')
      .get(':nth-child(21) > .card > h3')
      .contains('Mary Cat')
      .get(':nth-child(21) > .card > .ingredient-list > :nth-child(1)')
      .contains('beans')
      .get(':nth-child(21) > .card > .ingredient-list > :nth-child(2)')
      .contains('lettuce')
      .should('be.visible')
  });
  
});






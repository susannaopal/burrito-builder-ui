describe('User Flow View', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders)', {fixture: "orders.json"})
    .visit('http://localhost:3001/api/v1/orders')
})
  it('should be able to visit the url', () => {
    cy.url()
    .should('eq', 'http://localhost:3001/')
  })

})


// Write tests for the form and overall app user flows. Be sure to intercept the network requests.


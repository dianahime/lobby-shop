describe('xing devblog', () => {
  it('should link from homepage', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:3000')
    cy.contains('I take you to the Lobby Shop')
    cy.contains(`Let's go!`).click()
    cy.get('#name').type('Franz')
    cy.get('#email').type('kathjaniel@juju.com')
    cy.contains('Submit').click()
    cy.contains(`Isch kauf disch.`).click()
    cy.get('.fa-shopping-cart').click()
    cy.get('.fa-user-alt').click()
  })
})

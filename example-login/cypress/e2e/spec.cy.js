describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://18.232.8.230')
  
      cy.get('.usernamew')  
        .type('admin')
  
      cy.get('.passwordw')  
        .type('password')
  
      cy.get('.loginbuttonw')  
        .click()
  
      cy.contains('GIRIS BASARILI')
        .should('be.visible')
    })
  })
 
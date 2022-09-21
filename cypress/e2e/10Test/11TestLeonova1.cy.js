describe('Registry', () => {
    it('check ', () => {
      cy.viewport(1500, 900);
      cy.visit('https://www.beaxy.com/');
      cy.get('.form-send-input-wrap.form-send__email input').eq(0).type('havefun@yopmail.com').should('be.visible');
      cy.contains('REGISTER NOW').click();
      cy.get('[data-form="register"]').should('be.visible');
      cy.get('.register-email-monkey').should('have.value', 'havefun@yopmail.com');
    })  
})
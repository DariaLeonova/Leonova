describe('Authorization', () => {
    it('check ', () => {
      cy.viewport(1500, 900);
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/',{ timeout: 5000 });

  
      cy.get('#comp-kbgakxea #comp-kbgakxea_r_comp-kbgajy18').find('[class="_1UDJF"]').click(),{ timeout: 5000 };
     
      cy.get('#SM_ROOT_COMP9').should('be.visible');

      cy.get('div[data-testid="switchToEmailLink"]>button').click();
      cy.get('#SM_ROOT_COMP9').should('be.visible');
      cy.get('#input_input_emailInput_SM_ROOT_COMP9').should('have.value', 'leonovadaria18@gmail.com');
      cy.get('#input_input_passwordInput_SM_ROOT_COMP9').should('have.value', '123456A@');
      cy.get('#okButton_SM_ROOT_COMP9 button').click();


    })  
})


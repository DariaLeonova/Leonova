/*1) #input_input_passwordInput_SM_ROOT_COMP9. - не  уверенна по айди что он будет работать всегда, 
можно было взять вариант - [id*='input_input_passwordInput_SM_ROO']
*/
describe('Authorization', () => {
    it('check ', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/').wait(10000);
      cy.contains('Log In').click().wait(10000);
      cy.contains('Sign up with email').click()
      cy.get('#emailInput_SM_ROOT_COMP9').click().type('leonovadaria18@gmail.com');
      cy.get('#input_input_passwordInput_SM_ROOT_COMP9').click().type('12345@A');
      cy.get('[data-testid="buttonElement"]').click('center');

    })  
})


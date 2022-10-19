import 'cypress-xpath';
describe('Practical task 2', () => {

    before(() => {
      cy.visit('http://autopract.com/');
      cy.viewport(2250, 1900);
      cy.wait(2000);
     });

     it('commandTest findByText', () => {
        cy.clickElement('[aria-label="Close"]');

        cy.findByText('Men fashion').eq(1).should('exist');
        // cy.xpath("//*[contains(text(),'Men fashion')]").eq(1).should('exist');
      });


it.only('commandTest', () => {
  cy.clickOnElement('[aria-label="Close"]')

  cy.get('h4').contains('welcome to fashion');
  
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)
})
    
  });
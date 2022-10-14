describe('Cookies', () => {

    xit('checkCookis', () =>{
        cy.viewport(1950,1250);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);

        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.getCookie('beaxy_cookie_notification', {timeout:4000}).should('have.property','value','true');})
    })

        /// <reference types = 'Cypress'/>
describe('LocalStoraGE', () => {
    xit('setlocalStorage ', () => {
      cy.viewport(2500, 1900);
      cy.visit('https://beaxy.com/');
      cy.wait(5000);
      cy.setLocalStorage('TestKey','TestValue')
     });
     it('getlocalStorage ', () => {
      cy.viewport(2500, 1900);
      cy.visit('https://beaxy.com/');
      cy.wait(5000);
      cy.setLocalStorage('TestKey','TestValue');
      cy.getLocalStorage('TestKey').should('equal','TestValue');
      cy.clearLocalStorage();
     });
  })
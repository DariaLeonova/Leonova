
describe('page form', () => {
    
    it('input', () => {
      cy.visit('https://www.beaxy.com/'),{timeout:1000};
      
      cy.visit('.exchange-graph__title').scrollIntoView({duration: 1000});

      cy.contains('View more').click();
      cy.contains('XTZ / BTC').should('be.visible');
  
      

  

  });
  });

describe('Authorization facebook google appleid', () => {
    it('check ', () => {
    
      cy.visit('https://friends.multiplex.ua/login').wait(10000);

      cy.contains('a[class="social-link"] div[class="wrapper-icon-open-id"]').click().wait(10000);
      cy.contains('#google-signin-button').click().wait(10000);
      cy.contains('[class="apple-signin-btn wrapper-icon-open-id"]').click().wait(10000);
     

  
     
    
     
    

    })  
})



describe('Login page form', () => {
    
      it('input', () => {
        cy.visit('https://www.beaxy.com'),{timeout:1000};
        cy.get('div[class="modal-popUp modal-cookie active-modal-popUp"] :nth-child(1) div div > svg').click();
    
        cy.get('div[class="header-buttons"] span[data-tomodal="login"]',{ timeout: 10000 }).click();

        cy.get('#popUp-login-email').type('leonova@gmail.com');
        cy.get('#popUp-login-password').type('123456qqqqqqqq');

        cy.get('#popUp-login-email').invoke('val').should('eq',"leonova@gmail.com");
        cy.get('#popUp-login-password').invoke('val').should('eq',"123456qqqqqqqq");

        cy.get('#login-checkbox').click();
        
        cy.get('div[class="popUp-form-input-wrap popUp-form-login-btn"] :first-child').click();
    
  
    

    });
    });
    
describe('Cookies', () => {

    xit('checkCookis', () =>{
        cy.viewport(1950,1250);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);

        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.getCookie('beaxy_cookie_notification', {timeout:4000}).should('have.property','value','true');
    });

    it('update', () =>{
        cy.viewport(1950,1250);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.clearCookie('beaxy_cookie_notification').then(function(){
            cy.setCookie('beaxy_cookie_notification', 'false').then(function(){

            cy.getCookie('beaxy_cookie_notification', {timeout:4000}).should('have.property','value','false');
        });
    });

    it('deleteVValueCookie', () =>{
        cy.viewport(1950,1250);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.clearCookie('beaxy_cookie_notification').then(function(){
            cy.getCookie('beaxy_cookie_notification').should('be.null');
        });
    });

        

    
    });
});


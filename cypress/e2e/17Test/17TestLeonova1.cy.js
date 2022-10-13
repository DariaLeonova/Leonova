describe('Visual test', () => {

    it('Block', () =>{
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.viewport(1950,1600);
        cy.get('.home-table').invoke('remove');
        cy.get('.custom-widget').invoke('remove');
        cy.matchImageSnapshot();
    });


    it('Block_1', () =>{
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.viewport(1950,1600);
        cy.get('.home-table').invoke('remove');
        cy.get('.custom-widget').invoke('remove');
        cy.matchImageSnapshot();
    });
});


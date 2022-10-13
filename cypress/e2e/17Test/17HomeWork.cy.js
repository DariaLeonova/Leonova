describe('VisualTest HomePage', () => {

    it('Header Blok1 UkraineOverAll', () =>{
        cy.viewport(1300,760);
        cy.visit('https://www.terrasoft.ua/');
        cy.wait(3000);

        cy.get('#block-terrasoftpidtrimueukrainu').matchImageSnapshot();
    });

    it('Header Blok2 header', () =>{
        cy.viewport(1300,760);
        cy.visit('https://www.terrasoft.ua/');
        cy.wait(3000);

        cy.get('#block-header').matchImageSnapshot();
    });

    it('Header Blok3 creatio-content', () =>{
        cy.viewport(1300,760);
        cy.visit('https://www.terrasoft.ua/');
        cy.wait(3000);

        cy.get('#block-creatio-content').matchImageSnapshot();
    });

    it.only('HomePage', () =>{
        cy.viewport(1300,760);
        cy.visit('https://www.terrasoft.ua/');
        cy.wait(7000);

        cy.get('[class="creatio-region ts-promise ts-promise_fixed ts-promise_js"]').invoke('remove');
        cy.get('[class="col-12 col-lg-9 col-md-6 d-none d-md-block"]').invoke('remove');
        cy.get('div[class="ts-products__product ts-product"]').invoke('remove');
        cy.get(' [class="ts-industries__items creatio-animation creatio-animation_queue-fade-in animation animated"]').invoke('remove');
        cy.get('[class="ts-industries__all ts-link creatio-animation creatio-animation_fade-in text-center animation animated"]').invoke('remove');
        cy.get(' [class="creatio-region creatio-region_ts-zi-2 creatio-region_oh creatio-region_relative-10 creatio-region_ts-color-white creatio-region_br-top-left creatio-region_br-bottom-left creatio-region_br-bottom-left-md-0"]').invoke('remove');
        cy.get('.ts-care__text').invoke('remove');
        cy.get('[class="view-content creatio-animation creatio-animation_queue-fade-in animation animated"]').invoke('remove');
        cy.matchImageSnapshot();
    });

});

describe('calculator check', () => {
    beforeEach (() => {
        cy.visit('https://www.beaxy.com/');
    });

    
    it('Select form', () => {
    
      cy.get('input[type="number"]').type('1');
      
      cy.get('div[data-show="hide"]').click()
      cy.get('.widget-wrapp__main .widget__select-block .widget__select-block-drop-list').select('ETC');
      cy.get('.widget-wrapp__main .widget__select-block .widget__select-block-drop-list').invoke('Eval').should('eq',"7");

   
      
        });
    });
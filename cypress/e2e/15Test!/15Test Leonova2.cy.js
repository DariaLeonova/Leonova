///<reference types= "Cypress"/>
describe('Authorization', () => {
    it('new',()=>{
        cy.viewport(1850,1600);
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.wait(3000);
    })
      
       it('UI-Test0',()=>{
        cy.get('#gallery li :nth-child(2)').drag('#trash');
      })
    });


    it('UI-Test', () => {
        cy.get('.MuiSlider-root span:nth-child(2)')
        .invoke('attr','style','left: 0%; width: 99%;')
        .should('attr','style','left: 0%; width: 99%;')
        cy.get('.MuiSlider-root span:nth-child(3)')
        .invoke('attr','style','left: 99%;')
        cy.get('.MuiSlider-root input')
        .invoke('attr','aria-valuenow', '99')
        .invoke('attr', 'value', '99')
    });

    it('ui3', () => { 
        cy.get('[class*="css-1623zc"] span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 100%;');
        cy.get('[class*="css-1623zc"] span:nth-child(3)')
        .invoke('attr', 'style', 'left: 100%;');
        cy.get('[class*="css-1gv0u6o"] input')
        .invoke('attr', 'aria-valuenow', '100')
        .invoke('attr', 'value', '100')

       })

    
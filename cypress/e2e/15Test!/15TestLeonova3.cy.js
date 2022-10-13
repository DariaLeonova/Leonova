
///<reference types= "Cypress"/>
import '@4tw/cypress-drag-drop';

describe('test', () => {

    before(()=>{
        cy.visit('https://mui.com/material-ui/react-slider/');
        cy.viewport(1950,1600);
        cy.wait(2000);
    });
    
it('Small steps', () => { 
    cy.get('.MuiSlider-root span:nth-child(2)')
        .invoke('attr','style','left: 0%; width: 30%;')
        .should('attr','style','left: 0%; width: 90%;')
    
 
it('Custom marks', () => { 
    cy.get('.MuiSlider-root span:nth-child(2)')
        .invoke('attr','style','left: 0%; width: 30%;')
        .should('attr','style','left: 0%; width: 90%;')


it('Range slider', () => { 
            cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx span:nth-child(2)')
                .invoke('attr','style','left: 20%; width: 30%;')
                .should('attr','style','left: 10%; width: 40%;')
            cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx span:nth-child(2)')
                .invoke('attr','style','left: 50%;')
                .should('attr','style','left: 60%;')
            cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx span:nth-child(3)')
                .invoke('attr','style','left: 20%;')
                .should('attr','style','left: 10%;')

it('Slider with input field', () => { 
                    cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx span:nth-child(2)')
                        .invoke('attr','style','left: 0%; width: 0%;')
                        .should('attr','style','left: 0%; width: 40%;')
                    cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx span:nth-child(3)')
                        .invoke('attr','style','left: 0%;')
                        .should('attr','style','left: 40%;')
                    cy.get('MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp input')
                        .invoke('attr','aria-valuenow','0')
                        .should('attr','aria-valuenow','40')
              

it('Music player (time) ', () => { 
                    cy.get('MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeSmall css-xtm5wj span:nth-child(2)')
                                .invoke('attr','style','left: 0%; width: 0%;')
                                .should('attr','style','left: 0%; width: 40%;')
                    cy.get('.MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeSmall css-xtm5wj span:nth-child(3)')
                                .invoke('attr','style','left: 0%;')
                                .should('attr','style','left: 40%;')
                    cy.get('MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp input')
                                .invoke('attr','aria-valuenow','0')
                                .should('attr','aria-valuenow','40')
                    cy.get('.MuiBox-root css-3xfhk7 span:p(2)')
                                .invoke('0')
                                .should('1:59')


                          
    
    });
});
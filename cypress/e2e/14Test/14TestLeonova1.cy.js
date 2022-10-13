
describe('testIframe', () => {
    it('new',()=>{
        cy.viewport(1600,1600);
        cy.visit('https://demoqa.com/frames');
        cy.wait(3000);
      
        cy.get('#frame1').then(function($iFrame){
          const iframe = $iFrame.contents().find('body');
          cy.wait(7000);
          cy.wrap(iframe).find('#sampleHeading').then((el)=>{
            expect(el.text()).contains('This is a sample page');
        })
      })
    });
  })
    
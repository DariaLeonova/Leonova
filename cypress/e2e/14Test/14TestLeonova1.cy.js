
describe('testIframe', () => {
    it('new',()=>{
        cy.viewport(1600,1600);
        cy.visit('https://demoqa.com/frames');
        cy.wait(3000);
      
        cy.get('#frame1').then(function($iFrame){
          const iframe = $iFrame.contents().find('body');
          cy.wait(5000);
          cy.wrap(iframe).find('#sampleHeading').then((tt)=>{
            expect(tt.text()).to.be.equal('This is a sample page');
        })
      })
    });
  })
    
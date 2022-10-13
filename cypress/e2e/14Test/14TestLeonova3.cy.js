
describe('switching between frames', () => {
    it('new',()=>{
        cy.viewport(1600,1600);
        cy.visit('https://demoqa.com/nestedframes');
        cy.wait(3000);
      
        cy.get('[name="google_ads_iframe_/21849154601,22343295815/Ad.Plus-728x90_0"]').then(function($iframe){
          const iframeApp = $iframe.contents().find('body');
          cy.wait(7000);


        })
      })
    });
  
    
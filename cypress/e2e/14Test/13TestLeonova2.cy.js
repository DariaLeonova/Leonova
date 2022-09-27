describe('Authorization', () => {
    it('new',()=>{
        cy.viewport(1600,1080);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
      
        cy.get('[data-hook="add-to-cart"]').wait(2000).click();
        cy.wait(10000);
        cy.get('iframe').then(function($iframe){
          const iframe = $iframe.contents().find('body');
          cy.wait(5000);
          cy.wrap(iframe).find('[class="item-name"]').then((tt)=>{
            expect(tt.text()).to.contains(' Croc Clutch ');
          })
        })
      });
    });
    


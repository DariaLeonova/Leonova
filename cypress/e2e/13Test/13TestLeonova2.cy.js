
describe('adding the product to the basket', () => {
    it('check ', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch').wait(10000);

    
      cy.get('body[class="cart-widget-body device-desktop visual-focus-on js-focus-visible"] :nth-child(2) #item-name-0').invoke('text').should('eq'," Croc Clutch ");
      cy.get('body[class="cart-widget-body device-desktop visual-focus-on js-focus-visible"] :nth-child(2) span[data-hook="cart-widget-item-price"]').invoke('text').should('eq',"150,00 ₽");
      cy.get('body[class="cart-widget-body device-desktop visual-focus-on js-focus-visible"] :nth-child(2) span[data-hook="cart-widget-item-price"]').invoke('text').should('eq',"150,00 ₽");
      cy.get('body[class="cart-widget-body device-desktop visual-focus-on js-focus-visible"] :nth-child(2) .cart-widget-subtotal-title').invoke('text').should('eq'," Subtotal ");
      cy.get('body[class="cart-widget-body device-desktop visual-focus-on js-focus-visible"] :nth-child(2) .cart-widget-total').invoke('text').should('eq'," 300,00 ₽ ");
     
      

     

  
     

  
    });
});


describe('Comment submission form', () => {
    it('check ', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event');
      cy.get('[class="YCaN2C blog-card-border-color blog-card-background-color"]').scrollIntoView({duration: 3000});
      cy.wait(5000);

      cy.contains('button[data-hook="comment-box-placeholder"] ').click();
      cy.get('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]').should('have.value', 'hello');
      cy.contains('XTZ / BTC').should('be.visible');
      cy.contains('div[data-hook="primary-btn"]').click();

      cy.contains('hello').should('be.visible')

      

    })  
})

describe('Comment submission form', () => {
    it('check ', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event');
      cy.scrollTo(0,2200);
      //cy.get('#root-comment-box-start').scrollIntoView;
      cy.wait(30000);

      cy.contains('Write a comment...').should('be.visible');
      cy.get('[class="CGV7a3 wc-border-color-box wc-corner-radius-box wc-border-width"]').click().type('Test');
      cy.get('div[data-hook="primary-btn"]').click();

      

      

    })  
})

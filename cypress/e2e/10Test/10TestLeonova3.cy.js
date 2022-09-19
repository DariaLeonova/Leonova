describe('check first post', () => {
    
    it('input', () => {
      cy.visit('https://www.beaxy.com/blog/');

      cy.get('[class="blog-item"]').should('contain', 'Introduction to Bitcoin, Cryptocurrency, and Crypto Markets');
      cy.get('[class="blog-item"]').find('h2').should('contain', 'Introduction to Bitcoin, Cryptocurrency, and Crypto Markets');
      cy.get('[class="blog-item"]').should('contain', 'Introduction to Bitcoin, Cryptocurrency, and Crypto Markets');

    
       //cy.get('//div[@class="item-body"]/ descendant :: h2').invoke('text').should('eq',"Introduction to Bitcoin, Cryptocurrency, and Crypto Markets");

      //cy.get('[alt="Introduction to Bitcoin, Cryptocurrency, and Crypto Markets"]').invoke('text').should('eq',"Introduction to Bitcoin, Cryptocurrency, and Crypto Markets");
    });
});
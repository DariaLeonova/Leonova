describe('window SignIn', () => {
  it('passes', () => {
    cy.visit('de-de.facebook.com/');
    cy.get('h2').invoke('text').should('eq',"Auf Facebook bleibst du mit Menschen in Verbindung und teilst Fotos, Videos und vieles mehr mit ihnen.");

  cy.get('input[name="email"]').type('leonova@gmail.com');
  cy.get('[name="pass"]').type('123456qqqqqqqq');

  cy.get('[name="email"]').invoke('val').should('eq',"leonova@gmail.com");
  cy.get('[name="pass"]').invoke('val').should('eq',"123456qqq");

  cy.get('[name="login"]').should();
});
});

describe('window SignIn', () => {
before(() => {
  cy.log('before');
});
after(() => {
  cy.log('after');
});

beforeEach(() => {
  cy.visit('www.facebook.com/');
});

afterEach(() => {
  cy.log('afterEach');
});

  it('passes', () => {
    cy.visit('www.facebook.com/');
    cy.get('h2').invoke('text').should('eq',"Auf Facebook bleibst du mit Menschen in Verbindung und teilst Fotos, Videos und vieles mehr mit ihnen.");


  cy.get('[data-cookiebanner="accept_button"]').click();
  cy.get('[name="email"]').type('leonova@gmail.com');
  cy.get('[name="pass"]').type('123456qqqqqqqq');

  cy.get('[name="email"]').invoke('val').should('eq',"leonova@gmail.com");
  cy.get('[name="pass"]').invoke('val').should('eq',"123456qqqqqqqq");

  cy.get('[name="login"]').click();
});
});

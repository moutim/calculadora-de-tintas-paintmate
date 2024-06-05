describe('Testes para a Navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve aparecer o logo com o atributo alt', () => {
    cy.get('.div-logo img').should('have.attr', 'src').and('include', 'logo.svg');
    cy.get('.div-logo img').should('have.attr', 'alt', 'Logo PaintMate');
  });

  it('Deve aparecer o título h1', () => {
    cy.get('.div-logo h1').should('contain.text', 'PaintMate');
  });

  it('O link com nome `Calculadora` deve levar para a rota `/`', () => {
    cy.get('nav ul li a').should('exist').and('have.attr', 'href', '/');
    cy.get('nav ul li a').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

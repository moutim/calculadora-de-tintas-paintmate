/* eslint-disable no-undef */
describe('Testes para o componente AboutCalculation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('article.article-title .container-title-buttons .button').contains('Entenda o Cálculo').click();
  });

  it('Deve exibir o título "Entendendo o Cálculo em Detalhes"', () => {
    cy.get('.about-calculation h3').should('contain.text', 'Entendendo o Cálculo em Detalhes');
  });

  it('Deve exibir uma descrição sobre o cálculo', () => {
    cy.get('.about-calculation p').should('exist');
  });

  it('Deve exibir uma lista ordenada com os passos do cálculo', () => {
    cy.get('.about-calculation ol').should('exist');
  });

  it('Deve exibir as regras para realizar o cálculo', () => {
    cy.get('.about-calculation h3').eq(1).should('contain.text', 'Regras para realizar o cálculo');
    cy.get('.about-calculation ol').eq(1).should('exist');
  });

  it('Deve garantir que todas as regras estejam presentes', () => {
    cy.get('.about-calculation ol').eq(1).find('li').should('have.length', 4);
  });
});

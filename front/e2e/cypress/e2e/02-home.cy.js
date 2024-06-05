describe('Testes para a página "Home"', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir o título "Calculadora de Tinta"', () => {
    cy.get('article.article-title h2').should('contain.text', 'Calculadora de Tinta');
  });

  it('Deve exibir a descrição do artigo', () => {
    cy.get('article.article-title p').should('contain.text', 'Esta ferramenta foi projetada para ajudá-lo a calcular a quantidade de tinta necessária para pintar uma sala com quatro paredes.');
  });

  it('Deve exibir o botão "Calculadora"', () => {
    cy.get('article.article-title .container-title-buttons .button').contains('Calculadora').should('exist');
  });

  it('Deve exibir o botão "Entenda o Cálculo"', () => {
    cy.get('article.article-title .container-title-buttons .button').contains('Entenda o Cálculo').should('exist');
  });

  it('O botão "Calculadora" deve estar selecionado inicialmente', () => {
    cy.get('article.article-title .container-title-buttons .button').contains('Calculadora').should('have.class', 'button-selected');
  });

  it('Deve alterar a seleção para "Entenda o Cálculo" ao clicar no botão correspondente', () => {
    cy.get('article.article-title .container-title-buttons .button').contains('Entenda o Cálculo').click();
    cy.get('article.article-title .container-title-buttons .button').contains('Entenda o Cálculo').should('have.class', 'button-selected');
    cy.get('article.article-title .container-title-buttons .button').contains('Calculadora').should('not.have.class', 'button-selected');
  });

  it('Deve renderizar o componente Calculator ao carregar a página', () => {
    cy.get('.section-home .containter-title-calculator').should('exist');
  });  

  it('Deve renderizar o componente AboutCalculation ao clicar no botão "Entenda o Cálculo"', () => {
    cy.get('article.article-title .container-title-buttons .button').contains('Entenda o Cálculo').click();
    cy.get('.section-home .about-calculation').should('exist');
  });
});

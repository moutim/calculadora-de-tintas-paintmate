/* eslint-disable no-undef */
describe('Testes para o componente Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir o título "Preencha os campos abaixo para calcular"', () => {
    cy.get('.containter-title-calculator h3').should('contain.text', 'Preencha os campos abaixo para calcular:');
  });

  it('Deve exibir o aviso sobre o limite de tamanho da sala', () => {
    cy.get('.containter-title-calculator .warning').should('exist').and('contain.text', 'A calculadora funciona apenas para salas com paredes de 1 a 50 metros quadrados.');
  });

  it('Deve exibir 4 campos de entrada para as paredes', () => {
    cy.get('.container-wall-inputs .wall-input').should('have.length', 4);
  });

  it('Deve exibir o botão "Calcular"', () => {
    cy.get('.container-button-calc button').contains('Calcular').should('exist');
  });

  it('Deve desabilitar o botão "Calcular" se os campos não estiverem preenchidos', () => {
    cy.get('.container-button-calc button').contains('Calcular').should('be.disabled');
  });

  it('Deve habilitar o botão "Calcular" após preencher todos os campos', () => {
    cy.get('.container-wall-inputs .wall-input').each(($input) => {
      cy.wrap($input).click();
    });

    cy.get('.container-wall-inputs .wall-input input[type="number"]').each($input => {
      cy.wrap($input).type('5');
    });

    cy.get('.container-button-calc button').contains('Calcular').should('not.be.disabled');
  });

  it('Deve realizar o cálculo ao clicar no botão "Calcular"', () => {
    cy.get('.container-wall-inputs .wall-input').each(($input) => {
      cy.wrap($input).click();
    });
  
    cy.get('.container-wall-inputs .wall-input input[type="number"]').each($input => {
      cy.wrap($input).type('5');
    });

    cy.get('.container-button-calc button').contains('Calcular').click();

    cy.get('.result-calculator').should('exist');
  });

  it('Deve realizar o cálculo corretamente', () => {
    cy.get('.container-wall-inputs .wall-input').each(($input) => {
      cy.wrap($input).click();
    });
  
    cy.get('.container-wall-inputs .wall-input input[type="number"]').each($input => {
      cy.wrap($input).type('5');
    });

    cy.get('.container-button-calc button').contains('Calcular').click();

    cy.get('.result-calculator').should('exist');

    cy.get('.result-calculator p span').should('contain.text', '100m²');

    cy.get('.result-calculator h6').should('contain.text', '20 litros');

    cy.get('.result-calculator .container-paint-bucket figure').should('exist');

    cy.get('.result-calculator .container-warning-paint p').should('exist');
  });
});

import React from 'react';
import './AboutCalculation.css';

const AboutCalculation: React.FC = () => {
  return (
    <div className='about-calculation'>
      <h3>Entendendo o Cálculo em Detalhes</h3>
      <p>Nossa calculadora de tintas realiza um cálculo meticuloso para garantir que você tenha a quantidade correta de tinta para o seu projeto de pintura.</p>

      <h4>Aqui está uma visão mais detalhada de como o cálculo é feito:</h4>
      <ol>
        <li>
          O usuário deve inserir a altura e a largura de cada uma das quatro paredes da sala.
          <ul>
            <li>A área de cada parede deve estar entre 1 e 50 metros quadrados.</li>
            <li>Exemplo: se a altura for 2,5 metros e a largura for 4 metros, a área da parede será 2,5 (altura) x 4 (largura) = 10 m²</li>
          </ul>
        </li>

        <li>
          O usuário deve especificar o número de portas e janelas em cada parede.
          <ul>
            <li>Tamanho padrão da porta: 1,90m (altura) x 0,80m (largura) = 1,52 m²</li>
            <li>Tamanho padrão da janela: 1,20m (altura) x 2,00m (largura) = 2,40 m²</li>
            <li>A altura das paredes com portas deve ser, no mínimo, 30 centímetros maior que a altura da porta, ou seja, pelo menos 2,2 metros.</li>
          </ul>
        </li>

        <li>
          A área total de portas e janelas em uma parede não pode exceder 50% da área da parede.
          <ul>
            <li>Área útil de uma parede = Área total da parede - Área ocupada por portas e janelas.</li>
            <li>Exemplo: para uma parede de 10 m² com uma porta (1,52 m²) e uma janela (2,40 m²), a área útil será: 6,08 m²</li>
          </ul>
        </li>

        <li>
          Cada litro de tinta cobre 5 m².
          <ul>
            <li>Tinta necessária (em litros) = Área útil total ÷ 5.</li>
            <li>Exemplo: se a área útil total das quatro paredes for 30 m², a tinta necessária será: 6 litros</li>
          </ul>
        </li>

        <li>
          Sugestão de Latas de Tinta
          <ul>
            <li>O sistema sugere a combinação de latas de tinta de diferentes tamanhos para totalizar a quantidade necessária, priorizando as latas maiores para reduzir o número total de latas.</li>
            <li>
              Tamanhos disponíveis
              <ul>
                <li>0,5 L</li>
                <li>2,5 L</li>
                <li>3,6 L</li>
                <li>18 L</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Exemplo de Entrada de Dados
          <ul>
            <li>
              Primeira parede:
              <ul>
                <li>Altura (m): 2,5</li>
                <li>Largura (m): 4</li>
                <li>Quantide de portas (u): 1</li>
                <li>Quantidade de janelas (u): 1</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default AboutCalculation;

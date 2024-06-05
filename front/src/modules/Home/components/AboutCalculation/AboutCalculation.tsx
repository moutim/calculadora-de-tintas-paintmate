import React from 'react';
import './AboutCalculation.css';

const AboutCalculation: React.FC = () => {
  return (
    <div className='about-calculation'>
      <h3>Entendendo o Cálculo em Detalhes</h3>
      <p>Nossa calculadora de tintas realiza um cálculo meticuloso para garantir que você tenha a quantidade correta de tinta para o seu projeto de pintura.</p>

      <ol>
        <li>
          Cálculo da Área Total das Paredes com Janelas e Portas
          <ul>
            <li>Para cada parede, calculamos sua área total subtraindo a área ocupada pelas portas e janelas. Exemplo: <span>areaTotal = altura * largura - (quantidadePortas * areaPorta + quantidadeJanelas * areaJanela)</span></li>
          </ul>
        </li>
        <li>
          Cálculo da Quantidade de Tinta Necessária
          <ul>
            <li>Dividimos a área total das paredes pelo rendimento da tinta (5 metros quadrados por litro). Exemplo: <span>litrosNecessarios = areaTotal / 5</span></li>
          </ul>
        </li>
        <li>
          Sugestão de Latas de Tinta
          <ul>
            <li>Os tamanhos disponíveis de latas de tinta são armazenados em uma lista <span>tamanhoLatas = [18, 3.6, 2.5, 0.5]</span> e iterados sobre eles para calcular quantas latas de cada tamanho são necessárias para cobrir a área total.</li>
          </ul>
        </li>
        <li>
          Cálculo do Total de Litros Necessários
          <ul>
            <li>Calculamos a quantidade total de litros de tinta necessária somando os litros de cada tamanho de lata. Exemplo: <span>litrosNecessarios = quantidadeLatas * tamanhoLata</span></li>
          </ul>
        </li>
      </ol>

      <h3>Regras para realizar o cálculo</h3>

      <ol>
        <li>
          Garanta que essas regras estão sendo atendidas para realizar o cálculo corretamente:
          <ul>
            <li>Todos os dados de altura, largura, portas e janelas devem ser inseridas.</li>
            <li>O total de área das portas e janelas deve ser no máximo 50% da área de parede</li>
            <li>A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default AboutCalculation;

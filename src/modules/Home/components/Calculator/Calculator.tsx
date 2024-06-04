import React from 'react';
import './Calculator.css';
import Warning from '../../../../shared/Warning/Warning';

const Calculator: React.FC = () => {
  return (
    <article>
      <div>
        <h3>Preencha os campos abaixo para calcular:</h3>
        <Warning content='A calculadora funciona apenas para salas com exatamente quatro paredes.' />
      </div>
    </article>
  );
};

export default Calculator;

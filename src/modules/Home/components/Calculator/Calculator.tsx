import React from 'react';
import './Calculator.css';
import Warning from '../../../../shared/Warning/Warning';
import WallInput from '../WallInput/WallInput';

const Calculator: React.FC = () => {
  return (
    <article>
      <div className='containter-title-calculator'>
        <h3>Preencha os campos abaixo para calcular:</h3>
        <Warning content='A calculadora funciona apenas para salas com exatamente quatro paredes.' />
      </div>

      <div className='container-wall-inputs'>
        <WallInput 
          title='Primeira parede'
        />
        <WallInput 
          title='Segunda parede'
        />
        <WallInput 
          title='Terceira parede'
        />
        <WallInput 
          title='Quarta parede'
        />
      </div>
    </article>
  );
};

export default Calculator;

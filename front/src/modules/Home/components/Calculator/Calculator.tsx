import React, { useContext } from 'react';
import './Calculator.css';
import Warning from '../../../../shared/Warning/Warning';
import WallInput from '../WallInput/WallInput';
import ResultCalculator from '../ResultCalculator/ResultCalculator';
import { WallContext } from '../../context/CalculatorContext';

const Calculator: React.FC = () => {
  const { walls } = useContext(WallContext);
  console.log(walls);

  return (
    <article>
      <div className='containter-title-calculator'>
        <h3>Preencha os campos abaixo para calcular:</h3>
        <Warning content='A calculadora funciona apenas para salas com paredes de 1 a 50 metros quadrados.' />
      </div>

      <div className='container-wall-inputs'>
        <WallInput 
          title='Primeira parede'
          wallIndex={ 0 }
        />
        <WallInput 
          title='Segunda parede'
          wallIndex={ 1 }
        />
        <WallInput 
          title='Terceira parede'
          wallIndex={ 2 }
        />
        <WallInput 
          title='Quarta parede'
          wallIndex={ 3 }
        />

        <button className='button button-selected'>Calcular</button>
      </div>

      <ResultCalculator  />
    </article>
  );
};

export default Calculator;

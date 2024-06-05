import React, { useContext, useState } from 'react';
import './Calculator.css';
import Warning from '../../../../shared/Warning/Warning';
import WallInput from '../WallInput/WallInput';
import ResultCalculator from '../ResultCalculator/ResultCalculator';
import { WallContext } from '../../context/CalculatorContext';
import api from '../../../../utils/axios';

const Calculator: React.FC = () => {
  const { walls } = useContext(WallContext);
  const [resultCalc, setResultCalc] = useState(null);

  const calculate = async () => {
    const calcResult = await api.post('/calcular', walls);

    setResultCalc(calcResult.data);
  };

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

        <button className='button button-selected' onClick={ calculate }>Calcular</button>
      </div>

      {
        resultCalc && <ResultCalculator result={ resultCalc } />
      }
    </article>
  );
};

export default Calculator;

import React, { useContext, useState } from 'react';
import './Calculator.css';
import Warning from '../../../../shared/Warning/Warning';
import WallInput from '../WallInput/WallInput';
import ResultCalculator from '../ResultCalculator/ResultCalculator';
import { WallContext } from '../../context/CalculatorContext';
import api from '../../../../utils/axios';

const Calculator: React.FC = () => {
  const { walls, filledFields } = useContext(WallContext);
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
          title='1° Parede'
          wallIndex={ 0 }
        />
        <WallInput 
          title='2° Parede'
          wallIndex={ 1 }
        />
        <WallInput 
          title='3° Parede'
          wallIndex={ 2 }
        />
        <WallInput 
          title='4° Parede'
          wallIndex={ 3 }
        />
      </div>

      <div className='container-button-calc'>
        {
          !filledFields && <p className='error-calc-message'>Preencha todos os campos de altura e largura para ativar o botão.</p>
        }
        <button 
          className={`button ${filledFields ? 'button-selected' : 'button-not-selected'} `}
          onClick={ calculate }
          disabled={ !filledFields }
        >
          Calcular
        </button>
      </div>

      {
        resultCalc && <ResultCalculator result={ resultCalc } />
      }
    </article>
  );
};

export default Calculator;

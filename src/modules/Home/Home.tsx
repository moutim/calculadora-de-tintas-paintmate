import React, { useState } from 'react';
import './Home.css';
import Calculator from './components/Calculator/Calculator';
import AboutCalculation from './components/AboutCalculation/AboutCalculation';

const Home: React.FC = () => {
  const [calculatorIsVisible, setCalculatorIsVisible] = useState(true);

  const changeCalculatorVisible = (value: boolean) => setCalculatorIsVisible(value);

  return (
    <section>
      <article className='article-title'>
        <div className='container-title-texts'>
          <h2>Calculadora de Tinta</h2>
          <p>Esta ferramenta foi projetada para ajudá-lo a calcular a quantidade de tinta necessária para pintar uma sala com quatro paredes. </p>
        </div>

        <div className='container-title-buttons'>
          <button 
            className={`button ${calculatorIsVisible ? 'button-selected' : 'button-not-selected'}`}
            onClick={ () => changeCalculatorVisible(true) }
          >
            Calculadora
          </button>

          <button 
            className={`button ${!calculatorIsVisible ? 'button-selected' : 'button-not-selected'}`}
            onClick={ () => changeCalculatorVisible(false) }
          >
            Entenda o Cálculo
          </button>
        </div>
      </article>

      {
        calculatorIsVisible ? <Calculator /> : <AboutCalculation />
      }
    </section>
  );
};

export default Home;

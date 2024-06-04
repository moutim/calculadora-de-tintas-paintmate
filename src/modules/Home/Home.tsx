import React from 'react';
import './Home.css';
import Calculator from './components/Calculator/Calculator';

const Home: React.FC = () => {
  return (
    <section>
      <article className='article-title'>
        <div className='container-title-texts'>
          <h2>Calculadora de Tinta</h2>
          <p>Esta ferramenta foi projetada para ajudá-lo a calcular a quantidade de tinta necessária para pintar uma sala com quatro paredes. </p>
        </div>

        <div className='container-title-buttons'>
          <button className='button button-selected'>Calculadora</button>
          <button className='button button-not-selected'>Entenda o Cálculo</button>
        </div>
      </article>

      <Calculator />
    </section>
  );
};

export default Home;

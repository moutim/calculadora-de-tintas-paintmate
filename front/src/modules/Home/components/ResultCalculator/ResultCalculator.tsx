import React from 'react';
import paintBucket from '../../../../assets/paint-bucket.png';
import './ResultCalculator.css';

interface Props {
  // quantity: number;
  // title: string;
}

const ResultCalculator: React.FC<Props> = (props) => {
  return (
    <div className='result-calculator'>
      <p>Para área informada de xm², a estimativa é de:</p>
      <h6>20 litros</h6>

      <div className='container-paint-bucket'>
        <figure>
          <img src={ paintBucket } alt="Icone de uma lata de tinta" />
          <figcaption>1 Galão de 18L</figcaption>
        </figure>
        <figure>
          <img src={ paintBucket } alt="Icone de uma lata de tinta" />
          <figcaption>1 Galão de 18L</figcaption>
        </figure>
      </div>

      <div className='container-warning-paint'>
        <p>A estimativa realizada é baseada nas medidas fornecidas. 
          O rendimento mencionado acima pode variar dependendo da superfície e do método de aplicação da tinta.</p>
      </div>
    </div>
  );
};

export default ResultCalculator;


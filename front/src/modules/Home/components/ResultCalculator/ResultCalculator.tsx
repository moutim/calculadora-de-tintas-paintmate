import React from 'react';
import paintBucket from '../../../../assets/paint-bucket.png';
import './ResultCalculator.css';
import IResultCalc from '../../interfaces/IResultCalc';

interface Props {
  result: IResultCalc;
}

const ResultCalculator: React.FC<Props> = (props) => {
  return (
    <div className='result-calculator'>
      <p>Para uma área total de <span>{props.result.area}m²</span>, a estimativa é de:</p>
      <h6>{props.result.liters} litros</h6>

      <div className='container-paint-bucket'>
        {
          props.result.tins.map((info, index: number) => {
            return (
              <figure key={ index }>
                <img src={ paintBucket } alt="Icone de uma lata de tinta" />
                <figcaption>{info.quantity} { info.quantity == 1 ? 'Galão' : 'Galões'} de { info.size }L</figcaption>
              </figure>
            );
          })
        }
      </div>

      <div className='container-warning-paint'>
        <p>A estimativa realizada é baseada nas medidas fornecidas. 
          O rendimento mencionado acima pode variar dependendo da superfície e do método de aplicação da tinta.</p>
      </div>
    </div>
  );
};

export default ResultCalculator;


import React, { useState } from 'react';
import './WallInput.css';
import Input from '../../../../shared/Input/Input';
import Warning from '../../../../shared/Warning/Warning';
import arrowUp from '../../../../assets/arrow-up.svg';
import arrowDown from '../../../../assets/arrow-down.svg';

interface Props {
  title: string;
}
  
const WallInput: React.FC<Props> = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className='wall-input'>
      <div className='container-title-wall'>
        <h5>{ props.title }</h5>
        <img src={ isContentVisible ? arrowUp : arrowDown } alt="Simbolo de uma seta para cima" onClick={ toggleContentVisibility } />
      </div>

      { isContentVisible && 
        (
          <>
            <div className='container-inputs-wall'>
              <div>
                <Input title='Altura' />
                <Input title='Largura' />
              </div>
            </div>

            <div className='container-inputs-wall'>
              <h5>Portas</h5>

              <div>
                <Input title='Quantidade' />
                <Warning content='A medida padrão da porta é 0,80m x 1,90m' />
              </div>
            </div>

            <div className='container-inputs-wall'>
              <h5>Janelas</h5>

              <div>
                <Input title='Quantidade' />
                <Warning content='A medida padrão da janela é 2,00m x 1,20m' />
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default WallInput;


import React, { useState, useEffect } from 'react';
import './WallInput.css';
import Input from '../../../../shared/Input/Input';
import Warning from '../../../../shared/Warning/Warning';
import arrowUp from '../../../../assets/arrow-up.svg';
import arrowDown from '../../../../assets/arrow-down.svg';
import Select from '../../../../shared/Select/Select';

interface Props {
  title: string;
}

const WallInput: React.FC<Props> = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [doorsQuantity, setDoorsQuantity] = useState(0);
  const [windowsQuantity, setWindowsQuantity] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  const doorArea = 1.9 * 0.8;
  const windowArea = 1.2 * 2;

  useEffect(() => {
    const validateInputs = () => {
      const validationErrors: string[] = [];
      const wallArea = height * width;

      if (wallArea < 1 || wallArea > 50) {
        validationErrors.push('A área da parede deve estar entre 1 e 50 metros quadrados.');
      }

      if (height > 0 && width > 0) {
        const maxDoorsWindowsArea = wallArea * 0.5;
        const totalDoorsWindowsArea = (doorsQuantity * doorArea) + (windowsQuantity * windowArea);

        if (totalDoorsWindowsArea > maxDoorsWindowsArea) {
          validationErrors.push('A área total das portas e janelas não deve exceder 50% da área da parede.');
        }

        if (doorsQuantity > 0 && height < 2.2) {
          validationErrors.push('A altura da parede com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.');
        }
      }

      setErrors(validationErrors);
    };

    validateInputs();
  }, [width, height, doorsQuantity, windowsQuantity, doorArea, windowArea]);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  const handleHeightChange = (newValue: number) => setHeight(newValue);

  const handleWidthChange = (newValue: number) => setWidth(newValue);

  const handleDoorsQuantityChange = (newQuantity: number) => setDoorsQuantity(newQuantity);

  const handleWindowsQuantityChange = (newQuantity: number) => setWindowsQuantity(newQuantity);

  return (
    <div className='wall-input'>
      <div className='container-title-wall' onClick={toggleContentVisibility}>
        <h4>{props.title}</h4>
        <img src={isContentVisible ? arrowUp : arrowDown} alt="Simbolo de uma seta para cima" />
      </div>

      { isContentVisible && (
        <>
          { 
            errors.length > 0 && (
              <div className='error-messages'>
                { 
                  errors.map((error, index) => (
                    <p key={ index } className='error-message'>{ error }</p>
                  )) 
                }
              </div>
            ) 
          }

          <div className='container-inputs-wall'>
            <div>
              <Input title='Altura (m)' onChange={ handleHeightChange } />
              <Input title='Largura (m)' onChange={ handleWidthChange } />
            </div>
          </div>

          <div className='container-inputs-wall'>
            <h5>Portas</h5>
            <div>
              <Select title='Quantidade (u)' onChange={ handleDoorsQuantityChange } />
              <Warning content='A medida padrão da porta é 1,90m x 0,80m' />
            </div>
          </div>

          <div className='container-inputs-wall'>
            <h5>Janelas</h5>
            <div>
              <Select title='Quantidade (u)' onChange={ handleWindowsQuantityChange } />
              <Warning content='A medida padrão da janela é 1,20m x 2,00m' />
            </div>
          </div>
        </>
      )
      }
    </div>
  );
};

export default WallInput;

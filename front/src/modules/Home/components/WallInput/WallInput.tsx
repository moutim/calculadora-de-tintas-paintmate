import React, { useState, useEffect, useContext } from 'react';
import './WallInput.css';
import Input from '../../../../shared/Input/Input';
import Warning from '../../../../shared/Warning/Warning';
import arrowUp from '../../../../assets/arrow-up.svg';
import arrowDown from '../../../../assets/arrow-down.svg';
import Select from '../../../../shared/Select/Select';
import { WallContext } from '../../context/CalculatorContext';

interface Props {
  title: string;
  wallIndex: number;
}

const WallInput: React.FC<Props> = (props) => {
  const { setWall, walls } = useContext(WallContext);
  const wall = walls[props.wallIndex];

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const doorArea = 1.9 * 0.8;
  const windowArea = 1.2 * 2;

  useEffect(() => {
    const validateInputs = () => {
      const validationErrors: string[] = [];
      const wallArea = wall.height * wall.width;

      if (wallArea < 1 || wallArea > 50) {
        validationErrors.push('A área da parede deve estar entre 1 e 50 metros quadrados.');
      }

      if (wall.height > 0 && wall.width > 0) {
        const maxDoorsWindowsArea = wallArea * 0.5;
        const totalDoorsWindowsArea = (wall.doorsQuantity * doorArea) + (wall.windowsQuantity * windowArea);

        if (totalDoorsWindowsArea > maxDoorsWindowsArea) {
          validationErrors.push('A área total das portas e janelas não deve exceder 50% da área da parede.');
        }

        if (wall.doorsQuantity > 0 && wall.height < 2.2) {
          validationErrors.push('A altura da parede com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.');
        }
      }

      setErrors(validationErrors);
    };

    validateInputs();
  }, [wall.height, wall.width, wall.doorsQuantity, wall.windowsQuantity, doorArea, windowArea]);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  const handleHeightChange = (newValue: number) => {
    setWall(props.wallIndex, { ...wall, height: newValue });
  }; 

  const handleWidthChange = (newValue: number) => {
    setWall(props.wallIndex, { ...wall, width: newValue });
  };

  const handleDoorsQuantityChange = (newQuantity: number) => {
    setWall(props.wallIndex, { ...wall, doorsQuantity: newQuantity });
  }; 

  const handleWindowsQuantityChange = (newQuantity: number) => {
    setWall(props.wallIndex, { ...wall, windowsQuantity: newQuantity });
  }; 

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
              <Input title='Altura (m)' value={ wall.height } onChange={ handleHeightChange } />
              <Input title='Largura (m)' value={ wall.width } onChange={ handleWidthChange } />
            </div>
          </div>

          <div className='container-inputs-wall'>
            <h5>Portas</h5>
            <div>
              <Select title='Quantidade (u)' value={ wall.doorsQuantity } onChange={ handleDoorsQuantityChange } />
              <Warning content='A medida padrão da porta é 1,90m x 0,80m' />
            </div>
          </div>

          <div className='container-inputs-wall'>
            <h5>Janelas</h5>
            <div>
              <Select title='Quantidade (u)' value={ wall.windowsQuantity } onChange={ handleWindowsQuantityChange } />
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

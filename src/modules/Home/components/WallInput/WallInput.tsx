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

  useEffect(() => {
    const calcQuantityDoorsWindows = () => {
      const wallArea = height * width;

      const maxDoorsWindowsArea = wallArea * 0.5;

      const doorArea = 1.9 * 0.8;
      const windowArea = 1.2 * 2;

      const maxDoorsQuantity = Math.floor(maxDoorsWindowsArea / doorArea);
      const maxWindowsQuantity = Math.floor((maxDoorsWindowsArea - maxDoorsQuantity * doorArea) / windowArea);

      const calculatedDoorsQuantity = Math.min(doorsQuantity, maxDoorsQuantity);
      const calculatedWindowsQuantity = Math.min(windowsQuantity, maxWindowsQuantity);

      setDoorsQuantity(calculatedDoorsQuantity);
      setWindowsQuantity(calculatedWindowsQuantity);
    };

    calcQuantityDoorsWindows();
  }, [height, width, doorsQuantity, windowsQuantity]);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleHeightChange = (newValue: number) => {
    setHeight(newValue);
  };

  const handleWidthChange = (newValue: number) => {
    setWidth(newValue);
  };

  return (
    <div className='wall-input'>
      <div className='container-title-wall' onClick={toggleContentVisibility}>
        <h4>{props.title}</h4>
        <img src={isContentVisible ? arrowUp : arrowDown} alt="Simbolo de uma seta para cima" />
      </div>

      {isContentVisible &&
        (
          <>
            <div className='container-inputs-wall'>
              <div>
                <Input title='Altura (m)' onChange={handleHeightChange} />
                <Input title='Largura (m)' onChange={handleWidthChange} />
              </div>
            </div>

            <div className='container-inputs-wall'>
              <h5>Portas</h5>

              <div>
                <Select title='Quantidade (u)' quantity={ 1 } />
                <Warning content='A medida padrão da porta é 0,80m x 1,90m' />
              </div>
            </div>

            <div className='container-inputs-wall'>
              <h5>Janelas</h5>

              <div>
                <Select title='Quantidade (u)' quantity={ 1 } />
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
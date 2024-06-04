import React from 'react';
import './Input.css';

interface Props {
  title: string;
  onChange: (value: number) => void;
  value: number;
}

const Input: React.FC<Props> = (props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(event.target.value);
  
    if (value < 1) {
      value = 1;
    }
    if (value > 50) {
      value = 50;
    }

    props.onChange(value);

    event.target.value = value.toString();
  };

  return (
    <label htmlFor={ props.title } className='input'>
      { props.title }
      <input 
        type="number"
        step="0.1"
        name={ props.title }
        min="1"
        max="50"
        onChange={ handleInputChange }
        placeholder='Exemplo: 1,25'
        value={ props.value === 0 ? '' : props.value }
      />
    </label>
  );
};

export default Input;

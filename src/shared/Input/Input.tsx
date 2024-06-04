import React from 'react';
import './Input.css';

interface Props {
  title: string;
}

const Input: React.FC<Props> = (props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
  
    if (value < 1) {
      value = 1;
    }
    if (value > 50) {
      value = 50;
    }
  
    event.target.value = value.toString();
  };

  return (
    <label htmlFor={ props.title } className='input'>
      { props.title } (m)
      <input type="number" name="props.title" min="1" max="50" onChange={ handleInputChange } />
    </label>
  );
};

export default Input;


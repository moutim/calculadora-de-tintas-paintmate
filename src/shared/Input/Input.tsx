import React from 'react';
import './Input.css';

interface Props {
  title: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <label htmlFor={props.title} className='input'>
      { props.title }
      <input type="number" name="props.title" />
    </label>
  );
};

export default Input;


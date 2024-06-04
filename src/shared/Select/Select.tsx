import React from 'react';
import './Select.css';

interface Props {
  quantity: number;
  title: string;
}

const Select: React.FC<Props> = (props) => {
  return (
    <label htmlFor="quantity">
      { props.title }
      <select id='quantity'>
        { 
          [...Array(props.quantity)].map((_, index) => (
            <option key={ index } value={ index + 1 }>
              {index + 1}
            </option>
          ))
        }
      </select>
    </label>
  );
};

export default Select;


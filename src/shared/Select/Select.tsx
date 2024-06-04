import React from 'react';
import './Select.css';

interface Props {
  title: string;
  onChange: (value: number) => void;
}

const Select: React.FC<Props> = (props) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    props.onChange(value);
  };

  return (
    <label htmlFor="quantity">
      { props.title }
      <select 
        id='quantity'
        onChange={ handleSelectChange }
      >
        { 
          [...Array(11)].map((_, index) => (
            <option key={ index } value={ index }>
              { index }
            </option>
          ))
        }
      </select>
    </label>
  );
};

export default Select;


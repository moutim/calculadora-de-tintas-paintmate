import React from 'react';
import warning from '../../assets/warning.svg';
import './Warning.css';

interface Props {
  content: string;
}

const Warning: React.FC<Props> = (props) => {
  return (
    <div className='warning'>
      <div>
        <img src={ warning } alt="Simbolo de importante" />
        <p>Importante</p>
      </div>

      <div>
        <p>{ props.content }</p>
      </div>
    </div>
  );
};

export default Warning;

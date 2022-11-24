import React from 'react';
import './box.scss';

const Box = ({src, text}) => {
  return (
    <div className='box'>
        <img src={src} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default Box
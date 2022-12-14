import {FC} from 'react';
import './box.scss';

interface BoxProps{
    src:string;
    text:string;
}

const Box:FC<BoxProps> = ({src, text}) => {
  return (
    <div className='box'>
        <img src={src} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default Box
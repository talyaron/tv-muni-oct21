import {FC} from 'react';
import './box.scss';

interface ImageProps{
  src:string;
  text:string;
}


const Box:FC<ImageProps> = ({src, text }) => {
  return (
    <div className='box'>
        <img src={src} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default Box
import {FC} from 'react';
import { Image } from '../App';
import './box.scss';



const Box:FC<Image> = ({src, text }) => {
  return (
    <div className='box'>
        <img src={src} alt={text.toString()} />
        <p>{text}</p>
    </div>
  )
}

export default Box
import { useState } from 'react'
import Box from './comp/Box';
import "./App.css"
import SearchBox from './comp/SearchBox';
import GetADog from './comp/GetADog';

let x:number = 5;
x= 3

export interface Image{
  src:string;
  text:string |number;
}

function toCapitalLetters(text:string|number):string{
  try {
    return text.toString().toUpperCase();
  } catch (error) {
    console.error(error);
    return text.toString();
  }
}



const images:Array<Image> = [
  {src:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg", text:'rt'},
  {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmRYRJUViCj7q4Z1NiwyfIv9YEq702HgQfFGh_ksX&s', text:'try 2'},
  {src:'https://i.pinimg.com/originals/b5/a5/50/b5a550df8b2676169596e3316752d25c.jpg', text:3}
]

function App() {
  return (
    <div className="stam">
      <GetADog />
      <SearchBox />
      <div>Test w334543</div>
      <div>Test 256456456</div>
      {images.map((img, i)=>{
        return <Box src={img.src} text={toCapitalLetters(img.text)} />
      })}
    </div>
  );
}

export default App;




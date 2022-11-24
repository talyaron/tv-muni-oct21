import "./App.scss";
import Box from "./comp/Box";

const images = [
  {src:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-flowers-star-flower-1648071187.jpg', text:'try 1'},
  {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmRYRJUViCj7q4Z1NiwyfIv9YEq702HgQfFGh_ksX&s', text:'try 2'},
  {src:'https://i.pinimg.com/originals/b5/a5/50/b5a550df8b2676169596e3316752d25c.jpg', text:'try 3'}
]

function App() {
  return (
    <div className="stam">
      <div>Test w334543</div>
      <div>Test 256456456</div>
      {images.map((img, i)=>{
        return <Box src={img.src} text={img.text} />
      })}
    </div>
  );
}

export default App;

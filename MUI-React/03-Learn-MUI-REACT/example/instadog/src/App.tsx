import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Button from "@mui/material/Button";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function App() {
  const [count, setCount] = useState<number>(0);
  const [bread, setBread] = useState("dog");
  const [breeds, setBreads] = useState<Array<string>>([]);
  const [imgs, setImgs] = useState([]);

  function handleChange(ev: any) {
    try {
      setBread(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      const { message } = data;
      console.log(message);
      const breeds2: Array<string> = Object.keys(message);
      setBreads(breeds2);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (bread !== "dog") {
        const { data } = await axios.get(
          `https://dog.ceo/api/breed/${bread}/images`
        );
        const { message } = data;

        setImgs(message)
        console.log(message);
      }
    })();
  }, [bread]);

  return (
    <div className="App">
      <div>
      
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bread</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={bread}
              label="Bread"
              onChange={handleChange}>
              {breeds.map((bread, i) => {
                return (
                  <MenuItem key={i} value={bread}>
                    {bread}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        
      </div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imgs.map((img, i) => {
        console.log(img)
        return <ImageListItem key={`img=${i}`}>
          <img
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'stam'}
            loading="lazy"
          />
        </ImageListItem>
      })}
    </ImageList>
    </div>
  );
}

export default App;

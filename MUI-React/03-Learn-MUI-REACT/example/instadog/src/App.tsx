import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "@mui/material/Button";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant="contained"
          color='secondary'
          onClick={() => setCount((count) => count + 1)}>
          secondry count is {count}
        </Button>
        <Button
          variant="contained"
          color='warning'
          startIcon={<DeleteSharpIcon />}
          onClick={() => setCount((count) => count + 1)}>
          secondry count is {count}
        </Button>
        <Button
          variant="text"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

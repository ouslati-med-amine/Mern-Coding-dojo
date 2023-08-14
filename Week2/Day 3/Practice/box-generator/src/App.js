import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import DisplayBox from './components/DisplayBox';

function App() {
const[BoxArray,setBoxArray ]  = useState([])

  return (
    <div className="App">
      <Box BoxArray={BoxArray} setBoxArray={setBoxArray}/>
      <DisplayBox  BoxArray={BoxArray}/>
    </div>
  );

  }
export default App;




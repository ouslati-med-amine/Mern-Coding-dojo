import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';

function App() {
  const [message,setMessage]=useState([])
  return (
    <div className="App">
      <Form message={message} setMessage={setMessage}/>
      <Display msg={message}/>
    </div>
  );
}

export default App;

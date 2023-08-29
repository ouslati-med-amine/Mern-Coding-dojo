import './App.css';
import Detail from './components/Detail';
import Main from './views/Main';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route element={<Main/>} path='/'/>
        <Route element={<Detail/>} path='/product/:id'/>
      </Routes>
    </div>
  );
}

export default App;

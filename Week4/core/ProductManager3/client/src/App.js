import './App.css';
import Detail from './components/Detail';
import UpdateProduct from './components/UpdateProduct';
import Main from './views/Main';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Main/>} path='/'/>
        <Route element={<Detail/>} path='/product/:id'/>
        <Route element={<UpdateProduct/>} path='/product/edit/:id'/>
      </Routes>
    </div>
  );
}

export default App;

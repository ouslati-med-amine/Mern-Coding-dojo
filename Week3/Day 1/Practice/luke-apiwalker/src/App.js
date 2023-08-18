import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import StarWors from './components/StarWors';
import Form from './components/Form';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Link to ='/'>form</Link>
      <Routes>
      <Route path="/" element={<Form/>}/>
        <Route path="/people/:idpeople" element={<StarWors/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

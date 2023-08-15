
import './App.css';
import Home from './components/Home';
import { Link,Routes,Route } from 'react-router-dom';
import Number from './components/Number';
import Word from './components/Word';
import Mix from './components/Mix';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/number">number</Link>
      <Link to="/word">word</Link>
      <Link to="/mix">mix</Link>




      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/number/:setNum' element={<Number/>}/>
        <Route path='/word/:setWord' element={<Word/>}/>
        <Route path='/mix/:setWord/:setColor/:setBackgroundCalor' element={<Mix/>}/>
      </Routes>
    </div>
  );
}

export default App;

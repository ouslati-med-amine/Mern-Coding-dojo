import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayAuthors from "./components/DisplayAuthors";
import CreateForm from "./components/CreateForm";
import UpdateAuthor from "./components/UpdateAuthor";
function App() {
  
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route element={<DisplayAuthors/>} path='/'/>
        <Route element={<CreateForm/>} path='/create'/>
        <Route element={<UpdateAuthor/>} path='/Update/:id'/>
      </Routes>
    </div>
  );
}

export default App;

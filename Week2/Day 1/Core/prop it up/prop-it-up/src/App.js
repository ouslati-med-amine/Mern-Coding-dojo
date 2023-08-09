import './App.css';
import './components/PersonalCard'
import PersonalCard from './components/PersonalCard';
function App() {
  return (
    <div className="App">
      <PersonalCard 
      firstName ={"Doe"}
      lastName ={"Jane"}
      age={"45"}
      hairColor={"Black"}/>
      <PersonalCard 
      firstName ={"Smith"}
      lastName ={"Jhon"}
      age={"88"}
      hairColor={"Brown"}/>
      <PersonalCard 
      firstName ={"Fillmore"}
      lastName ={"Milliard"}
      age={"50"}
      hairColor={"brown"}/>
      <PersonalCard 
      firstName ={"Smith"}
      lastName ={"Maria"}
      age={"62"}
      hairColor={"brown"}/>
    </div>
  );
}

export default App;

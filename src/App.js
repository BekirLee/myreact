import logo from './logo.svg';
import User from "./components/user"
import './App.css';


function App() {
  return (
    <div className="App">
      <User
        name="Nihad Bakirli"
        profession="IT"
        uni="AzTU"
      />
      <User
        name="Vuqar Bakirov"
        profession="Teacher"
        uni="Sheki"
      />
      <User
        name="Humay Bakirov"
        profession="Teacher"
        uni="Sheki"
      />
    </div>
  );
}

export default App;

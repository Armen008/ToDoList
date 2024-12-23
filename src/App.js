import logo from './logo.svg';
import './App.css';
// import ManuBar from './componenets/project';
import NavBar from './componenets/project'
import Form from './componenets/Form';
import ToDoCont from './componenets/ToDoCont';
import InputForm from './componenets/InputForm';
import Conteiner from './componenets/Conteiner';


function App() {
  return (
    <div className="App">
<ToDoCont/>
<InputForm/>
<Conteiner/>
    </div>
    
    
  );
}

export default App;

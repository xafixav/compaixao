import logo from './logo.svg';
import { Router } from 'react-router-dom'
import './App.css';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      {Forms()}
    </div>
  );
}

export default App;

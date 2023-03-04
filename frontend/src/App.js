import {   BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom'
import './App.css';
import Forms from './components/Forms';
import AssistedInfo from './components/AssistedInfo'
import Formulary from './components/Formulary';
import Header from './components/Header';

function App() {
  return (
    <Router>
      {Header()}
        <Routes>
          <Route exact path='/' element={<Formulary/>}/>
          <Route exact path='/assisted' element={<AssistedInfo/>}/>
        </Routes>
    </Router>
  );
}

export default App;

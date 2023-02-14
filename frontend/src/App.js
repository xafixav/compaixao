import logo from './logo.svg';
import {   BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom'
import './App.css';
import Forms from './components/Forms';
import AssistedInfo from './components/AssistedInfo'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Forms/>}/>
          <Route exact path='/assisted' element={<AssistedInfo/>}/>
        </Routes>
    </Router>
  );
}

export default App;

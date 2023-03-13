import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
// import Forms from './components/Forms';
import AssistedInfo from './components/AssistedInfo';
// import Formulary from './components/Formulary';
import AssistedForms from './components/AssistedForms';
import Header from './components/Header';
import { AssistedContext } from './services/AssistedContext';

function App() {

  return (
    <AssistedContext.Provider value={{}}>
    <Router>
      {Header()}
      <Routes>
        <Route exact path="/" element={<AssistedForms />} />
        <Route exact path="/assisted" element={<AssistedInfo />} />
      </Routes>
    </Router>
    </AssistedContext.Provider>
  );
}

export default App;

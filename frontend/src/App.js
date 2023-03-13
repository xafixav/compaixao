import React, { useEffect, useState } from 'react';
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
import AssistedUpdate from './components/AssistedUpdate';
import Header from './components/Header';
import { AssistedContext } from './services/AssistedContext';
import useAllAssisted from './hooks/useFetchAllAssisted';
import useTodayAssisteds from './hooks/useTodayAssisteds';

function App() {
  const [update, assisteds, fetchAssisted, setUpdate] = useAllAssisted()
  const [updateToday, assistedsToday, fetchAssistedToday, setUpdateToday] = useTodayAssisteds()

  useEffect(() => {
    fetchAssisted();
  }, []);

  return (
    <AssistedContext.Provider value={{
      update, assisteds, fetchAssisted, setUpdate,
      updateToday, assistedsToday, fetchAssistedToday, setUpdateToday
      }}>
    <Router>
      {Header()}
      <Routes>
        <Route exact path="/" element={<AssistedForms />} />
        <Route exact path="/assisted" element={<AssistedInfo />} />
        <Route exact path="/assisted/:id" element={<AssistedUpdate />} />
      </Routes>
    </Router>
    </AssistedContext.Provider>
  );
}

export default App;

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
import useTodayAssisteds from './hooks/useTodayAssisteds';
import useAssistedsHooks from './hooks/useAssistedsHooks';

function App() {
  const [assisteds, createAssisted, updateAssisted, getAssisted] = useAssistedsHooks();
  const [updateToday, assistedsToday, fetchAssistedToday, setUpdateToday] = useTodayAssisteds(assisteds);

  // console.log(assisteds, 'eu nao deveria ser um undefined, deveria ser o array do localStorage parceadao');

  return (
    <AssistedContext.Provider value={{
      assisteds, createAssisted, updateAssisted, getAssisted,
      updateToday, assistedsToday, fetchAssistedToday, setUpdateToday
      }}>
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route exact path="/" element={<AssistedForms />} />
          <Route exact path="/assisted" element={<AssistedInfo />} />
          <Route exact path="/assisted/:id" element={<AssistedUpdate />} />
        </Route>
      </Routes>
    </Router>
    </AssistedContext.Provider>
  );
}

export default App;

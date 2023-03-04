import React, { useState } from "react";
import "../styles/Formulary.css"; // import the CSS file
import {getAllAssisted, registerAssisted} from '../services/requests';

function Formulary() {
  const [assistedNumber, setAssistedNumber] = useState("");
  const [name, setName] = useState("");
  const [bornAge, setBornAge] = useState("");
  const [bornCity, setBornCity] = useState("");
  const [bornState, setBornState] = useState("");
  const [jobProfession, setJobProfession] = useState("");
  const [cpf, setCpf] = useState("");
  const [livingState, setLivingState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    registerAssisted({
      assistedNumber,
      name,
      bornAge,
      bornCity,
      bornState,
      jobProfession,
      cpf,
      livingState,
    });
    setAssistedNumber("");
    setName("");
    setBornAge("");
    setBornCity("");
    setBornState("");
    setJobProfession("");
    setCpf("");
    setLivingState("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-title">Formulario de Assistenciados</h1>
      <div className="form-row">
        <label className="form-label">
          Numero:
          <input
            type="number"
            value={assistedNumber}
            onChange={(event) => setAssistedNumber(event.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          Data de nascimento:
          <input
            type="date"
            value={bornAge}
            onChange={(event) => setBornAge(event.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Cidade de origem:
          <input
            type="text"
            value={bornCity}
            onChange={(event) => setBornCity(event.target.value)}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          Estado de origem:
          <input
            type="text"
            value={bornState}
            onChange={(event) => setBornState(event.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Profissão:
          <input
            type="text"
            value={jobProfession}
            onChange={(event) => setJobProfession(event.target.value)}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-label">
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
        Estado de vida:
          <select 
            value='Albergue' 
            onChange={(event) => setLivingState(event.target.value)}
            className="form-input"
          >
              <option value='Rua'>Rua</option>
              <option value='Albergue'>Albergue</option>
              <option value='Casa'>Casa</option>
          </select>
        </label>
      </div>
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default Formulary;

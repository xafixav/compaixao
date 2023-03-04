import React, { useState, useEffect } from 'react';
import { getAllAssisted } from '../services/requests';
import "../styles/PersonCard.css";

const AssistedInfo = () => {
    const [allAssisted, setAllAssisted] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const assisteds = await getAllAssisted();
        setAllAssisted(assisteds);
    }

    const generateCardList = () => {
       return allAssisted.map((assisted) => {
            return (PersonCard(assisted))
        })
    };

    const PersonCard = ({ assistedNumber, name, bornAge, bornCity, bornState, jobProfession, cpf, livingState, createdAt, updatedAt }) => {
        const formatDate = (date) => {
          const dateString = new Date(date);
          const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
          return dateString.toLocaleDateString('pt-BR', options);
        };
      
        return (
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">CPF: {cpf}</h6>
            </div>
            <div className="card-body">
              <h4 className="card-text">
                Numero do Assistencializado: {assistedNumber} <br />
                Nasceu: {bornAge} em {bornCity}, {bornState} <br />
                Trabalha com: {jobProfession || 'N/A'} <br />
                Vivendo em: {livingState} <br />
                Registrado em: {formatDate(createdAt)} <br />
                Ultima atualização em: {formatDate(updatedAt)} <br />
              </h4>
            </div>
          </div>
        );
      };

    return (
        <div className='card-page'>
            {generateCardList() || 'Nenhuma pessoa encontrada no banco de dados.'}
        </div>
    )
}

export default AssistedInfo;
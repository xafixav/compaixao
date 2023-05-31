/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, useContext } from 'react';
// import react-bootstrap button component
import { Button } from 'react-bootstrap';
import '../styles/PersonCard.css';
import ReactLoading from 'react-loading';
import { AssistedContext } from '../services/AssistedContext';


function AssistedInfo() {
  const context = useContext(AssistedContext);
  const { assisteds } = context;
  const [allAssisted, setAllAssisted] = useState(assisteds);
  const [filter, setFilter] = useState('');
  const [filteredAssisted, setFilteredAssisted] = useState([]);
  const [loading, setLoading] = useState(true);

  //format cpf function
  const formatCPF = (cpf) => {
    const cpfString = cpf.toString();
    const cpfArray = cpfString.split('');
    cpfArray.splice(3, 0, '.');
    cpfArray.splice(7, 0, '.');
    cpfArray.splice(11, 0, '-');
    return cpfArray.join('');
  };

  const fetchAPI = async () => {
    try {
      setAllAssisted(assisteds);
      setFilteredAssisted(assisteds);
      setLoading(false);
    } catch(error) {
      console.error(error);
    }
  };

  const filterAssisted = () => {
    console.log(assisteds, 'eu deveria ser o assisteds', allAssisted, 'eu tambem deveria ser o assisteds');
    const filtered = allAssisted.filter((assisted) => {
      if (filter.toLowerCase() === 'hoje sim') {
        const today = new Date();
        const assistedDate = new Date(assisted.updatedAt);
        return ( today.getDate() === assistedDate.getDate() 
        && today.getMonth() === assistedDate.getMonth() 
        && today.getFullYear() === assistedDate.getFullYear()
        && assisted.sleepOver === true
         );
      }
     return assisted.name.toLowerCase().includes(filter.toLowerCase()) ||
      assisted.cpf.toLowerCase().includes(filter.toLowerCase()) ||
      assisted.assistedNumber.toString().includes(filter.toLowerCase());
    });
    setFilteredAssisted(filtered);
    if (filter === '') {
      setFilteredAssisted(allAssisted);
    }
  };

  useEffect(() => {
      fetchAPI();
  }, []);

  useEffect(() => {
    filterAssisted();
}, [filter]);

  function PersonCard(person) {

    const {
      id,
      assistedNumber,
      name,
      bornAge,
      bornCity,
      bornState,
      jobProfession,
      cpf,
      livingState,
      gender,
      shoesNumber,
      legsNumber,
      shirtNumber,
      sleepOver,
      createdAt,
      updatedAt,
      comentary,
      prayer,
    } = person
    const formatDate = (date) => {
      const dateString = new Date(date);
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return dateString.toLocaleDateString('pt-BR', options);
    };


    if (!person) {
      return null;
    }

    return (
      <div className="card" key={id}>
        <div className="card-header">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            CPF:
            {formatCPF(cpf)}
          </h6>
        </div>
        <div className="card-body">
          <h4 className="card-text">
            Numero do Assistencializado:
            {' '}
            {assistedNumber}
            {' '}
            <br />
            Nasceu:
            {' '}
            {bornAge}
            {' '}
            em
            {' '}
            {bornCity}
            ,
            {' '}
            {bornState}
            {' '}
            <br />
            Trabalha com:
            {' '}
            {jobProfession || 'N/A'}
            {' '}
            <br />
            Vivendo em:
            {' '}
            {livingState}
            {' '}
            <br />
            Genero:
            {' '}
            {gender}
            {' '}
            <br />
            Numero de sapatos:
            {' '}
            {shoesNumber}
            {' '}
            <br />
            Numero de calças:
            {' '}
            {legsNumber}
            {' '}
            <br />
            Numero de camisas:
            {' '}
            {shirtNumber}
            {' '}
            <br />
            Dorme em:
            {' '}
            {livingState}
            {' '}
            <br />
            Vai dormir no albergue:
            {' '}
            {sleepOver ? 'Sim' : 'Não'}
            {' '}
            <br />
            {generatePersonTextAreas(comentaries)}
            Registrado em:
            {' '}
            {formatDate(createdAt)}
            {' '}
            <br />
            Ultima atualização em:
            {' '}
            {formatDate(updatedAt)}
            {' '}
            <br />
            <Button variant="primary" href={`/assisted/${id}`}>Editar</Button>
          </h4>
        </div>
      </div>
    );
  }

  const generatePersonTextAreas = (comentary) => {
    if (typeof comentary === undefined) return null;
    return (
      <div>
            Comentario:
            {' '}
            {comentary}
            {' '}
            <br />
            Oração:
            {' '}
            {prayer}
            {' '}
      </div>
    );
  }

  const generateCardList = () => {
    if (filteredAssisted.length === 0) return null;
    return filteredAssisted.map((assisted) => (PersonCard(assisted)));
  }

  return (
    <div className="card-page">
      <input type="text" className="card-search" placeholder="Pesquisar" onChange={(e) => setFilter(e.target.value)} />
      {loading ? <ReactLoading type={'spin'} color={'black'} height={'7rem'} width={'7rem'} />
      : 
      generateCardList() || 'Nenhuma pessoa encontrada no banco de dados.'}
    </div>
  );
}

export default AssistedInfo;

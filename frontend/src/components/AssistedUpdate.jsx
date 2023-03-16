import React, { useEffect, useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { register } from '../services/requests';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AssistedForms.css';
import { useParams, useNavigate } from 'react-router-dom';
import { AssistedContext } from '../services/AssistedContext';

// create states for these fields
// {
//   "id": 1,
//   "name": "Kleber Camargo",
//   "assistedNumber": 2,
//   "bornAge": "14/03/1987",
//   "bornCity": "Limeira",
//   "bornState": "Sao Paulo",
//   "jobProfession": "",
//   "gender": "Masculino",
//   "shoesNumber": 35,
//   "legsNumber": 35,
//   "shirtNumber": 35,
//   "cpf": "13215818978",
//   "sleepOver": true,
//   "livingState": "Rua",
//   "createdAt": "2023-03-13T02:23:23.259Z",
//   "updatedAt": "2023-03-13T02:23:23.259Z",
//   "comentaries": [
//       {
//           "id": 1,
//           "assistedId": 1,
//           "comentary": "Esta sem Tenis - Roupa de Frio",
//           "prayer": "Pedir para melhorar a Saude",
//           "createdAt": "2023-03-13T02:23:23.274Z",
//           "updatedAt": "2023-03-13T02:23:23.274Z"
//       }
//   ]
// },

function AssistedUpdate() {
  { /* create a state for each field */ }
  const context = useContext(AssistedContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [assistedNumber, setAssistedNumber] = useState('');
  const [name, setName] = useState('');
  const [bornAge, setBornAge] = useState('');
  const [bornCity, setBornCity] = useState('');
  const [bornState, setBornState] = useState('');
  const [jobProfession, setJobProfession] = useState('');
  const [cpf, setCpf] = useState('');
  const [livingState, setLivingState] = useState('');
  const [gender, setGender] = useState('');
  const [shoesNumber, setShoesNumber] = useState('');
  const [legsNumber, setLegsNumber] = useState('');
  const [shirtNumber, setShirtNumber] = useState('');
  const [sleepOver, setSleepOver] = useState('');
  const [isSleepOverAtLimit, setIsSleepOverAtLimit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [prayer, setPrayer] = useState('');
  const [comentary, setComentary] = useState('');
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [assistedComentaries, setAssistedComentaries] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      { /* create a object with all states */ }
      const assisted = {
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
      };

      console.log(id);

      await register('/assisted/update', assisted);


      const textAreas = {
        assistedId: +id,
        prayer,
        comentary,
      };


      await register(`/assisted/comentary/update`, textAreas);

      alert('Assistenciado atualizado com sucesso');

      navigate.push('/assisted');
      // setAssistedNumber('');
      // setName('');
      // setBornAge('');
      // setBornCity('');
      // setBornState('');
      // setJobProfession('');
      // setCpf('');
      // setLivingState('');
      // setGender('');
      // setShoesNumber('');
      // setLegsNumber('');
      // setShirtNumber('');
      setSleepOver(false);
      setSubmitted(!submitted);
      return null;
    } catch (error) {
      return alert('Erro ao cadastrar assistenciado: ' + error || error.message);
    }
  };

  useEffect(() => {
    fullfillForm();
  }, [context.assistedsToday]);

  const fullfillForm = () => {
    const assisted = context.assisteds.find((assisted) => assisted.id === Number(id));
    if (!assisted) return null;
    setAssistedNumber(assisted.assistedNumber);
    setName(assisted.name);
    setBornAge(assisted.bornAge);
    setBornCity(assisted.bornCity);
    setBornState(assisted.bornState);
    setJobProfession(assisted.jobProfession);
    setGender(assisted.gender);
    setCpf(assisted.cpf);
    setLivingState(assisted.livingState);
    setShoesNumber(assisted.shoesNumber);
    setLegsNumber(assisted.legsNumber);
    setShirtNumber(assisted.shirtNumber);
    setSleepOver(assisted.sleepOver);
    setShirtNumber(assisted.shirtNumber);
    setSleepOver(assisted.sleepOver);
    setPrayer(assisted.comentaries[0].prayer);
    setComentary(assisted.comentaries[0].comentary);
  }

  useEffect(() => {
    handleSleepOver();
  }, [submitted, context.assisteds]);

  useEffect(() => {
    handleButtonStatus();
  }, [assistedNumber, name, bornAge, bornAge, bornCity, bornState, cpf, livingState, gender, shoesNumber, legsNumber, shirtNumber]);
  
  const handleButtonStatus = () => {
    const allFields = [assistedNumber, name, bornAge, bornAge, bornCity, bornState, cpf, livingState, gender, shoesNumber, legsNumber, shirtNumber];
    const isAllFieldsFilled = allFields.every((field) => field !== '');
    if (isAllFieldsFilled) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    return
  }

  const handleSleepOver = () => {
    if (context?.asssteds?.length === 0) return null;
    const filterSleepOver = context.assisteds.filter((assisted) => assisted.sleepOver);
    if (filterSleepOver.length >= 5) {
      setIsSleepOverAtLimit(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="container">
      <Form.Group>
        <Form.Label htmlFor="assistedNumber">Numero da pulseira</Form.Label>
        <Form.Control
          id="assistedNumber"
          type="number"
          placeholder="Insira Numero da pulseira"
          value={assistedNumber}
          onChange={(e) => setAssistedNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Control
          id="name"
          type="text"
          placeholder="Insira Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="bornAge">Data de nascimento</Form.Label>
        <Form.Control
          id="bornAge"
          type="date"
          placeholder="Insira Data de nascimento"
          value={bornAge}
          onChange={(e) => setBornAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="bornCity">Cidade de nascimento</Form.Label>
        <Form.Control
          id="bornCity"
          type="text"
          placeholder="Insira Cidade de nascimento"
          value={bornCity}
          onChange={(e) => setBornCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="bornState">Estado de nascimento</Form.Label>
        <Form.Control
          type="text"
          id="bornState"
          placeholder="Insira Estado de nascimento"
          value={bornState}
          onChange={(e) => setBornState(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="jobProfession">Profissão de Trabalho</Form.Label>
        <Form.Control
          id="jobProfession"
          type="text"
          placeholder="Insira Profissão de Trabalho"
          value={jobProfession}
          onChange={(e) => setJobProfession(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="cpf">CPF</Form.Label>
        <Form.Control
          id="cpf"
          type="text"
          placeholder="Insira CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="livingState">Estado de vida</Form.Label>
        <Form.Control
          id="livingState"
          type="text"
          placeholder="Insira Estado de vida"
          value={livingState}
          onChange={(e) => setLivingState(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="gender">Genero</Form.Label>
        <Form.Control
          id="gender"
          as="select"
          placeholder="Insira Genero"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value=""> -- Selecione uma Opção --</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="shoesNumber">Numero do calçado</Form.Label>
        <Form.Control
          id="shoesNumber"
          type="number"
          placeholder="Insira Numero do calçado"
          value={shoesNumber}
          onChange={(e) => setShoesNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="legsNumber">Numero da calça/bermuda</Form.Label>
        <Form.Control
          type="number"
          id="legsNumber"
          placeholder="Insira Numero da calça/bermuda"
          value={legsNumber}
          onChange={(e) => setLegsNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="shirtNumber">Numero da Camisa</Form.Label>
        <Form.Control
          id="shirtNumber"
          type="number"
          placeholder="Insira Numero da Camisa"
          value={shirtNumber}
          onChange={(e) => setShirtNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="prayer">Oração</Form.Label>
        <Form.Control
          id="prayer"
          as="textarea"
          placeholder="Insira Oração"
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="comentary">Comentário</Form.Label>
        <Form.Control
          id="comentary"
          as="textarea"
          placeholder="Insira Comentário"
          value={comentary}
          onChange={(e) => setComentary(e.target.value)}
        />
      </Form.Group>
      {isSleepOverAtLimit ?
      (<div>
        <h6>Limite de assitenciados diario no alojamento atingido</h6>
        <br/>
        </div>) 
      : <Form.Group className='form-checkbox'>
        <Form.Label htmlFor="sleepOver">Deseja passar a noite</Form.Label>
        <Form.Check
          id="sleepOver"
          type="checkbox"
          placeholder="Insira Deseja passar a noite"
          checked={sleepOver}
          onChange={(e) => {setSleepOver(e.target.checked)}}
          disabled={isSleepOverAtLimit}
        />
      </Form.Group>}
      <Button variant={BtnDisabled ? "second" : "primary"} type="submit" disabled={BtnDisabled}>
        Submit
      </Button>
    </Form>
  );
}

export default AssistedUpdate;

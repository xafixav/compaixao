import React, { useEffect, useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { register } from '../services/requests';
import useTodayAssisteds from '../hooks/useTodayAssisteds';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AssistedForms.css';
import { AssistedContext } from '../services/AssistedContext';

function AssistedForms() {
  { /* create a state for each field */ }
  const context = useContext(AssistedContext);
  const { assisteds, createAssisted } = context;
  const [assistedNumber, setAssistedNumber] = useState('teste');
  const [name, setName] = useState('teste');
  const [bornAge, setBornAge] = useState('teste');
  const [bornCity, setBornCity] = useState('teste');
  const [bornState, setBornState] = useState('teste');
  const [jobProfession, setJobProfession] = useState('teste');
  const [cpf, setCpf] = useState('teste');
  const [livingState, setLivingState] = useState('teste');
  const [gender, setGender] = useState('Masculino');
  const [shoesNumber, setShoesNumber] = useState(35);
  const [legsNumber, setLegsNumber] = useState(35);
  const [shirtNumber, setShirtNumber] = useState(35);
  const [sleepOver, setSleepOver] = useState(false);
  const [isSleepOverAtLimit, setIsSleepOverAtLimit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [prayer, setPrayer] = useState("teste");
  const [comentary, setComentary] = useState("teste");
  const [BtnDisabled, setBtnDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      { /* create a object with all states */ }
      const assisted = {
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
        prayer,
        comentary,
      };


      createAssisted(assisted);

      alert('Assistenciado cadastrado com sucesso');

  
      setAssistedNumber('');
      setName('');
      setBornAge('');
      setBornCity('');
      setBornState('');
      setJobProfession('');
      setCpf('');
      setLivingState('');
      setGender('');
      setShoesNumber('');
      setLegsNumber('');
      setShirtNumber('');
      setSleepOver(false);
      setSubmitted(!submitted);
      return null;
    } catch (error) {
      console.error(error);
      return alert('Erro ao cadastrar assistenciado');
    }
  };

  useEffect(() => {
    handleSleepOver();
  }, [submitted, assisteds]);

  useEffect(() => {
    handleButtonStatus();
  }, [assistedNumber, name, bornAge, bornAge, bornCity, bornState, cpf, livingState, gender, shoesNumber, legsNumber, shirtNumber]);
  
  const handleButtonStatus = () => {
    // const filterSleepOver = assisteds.filter((assisted) => assisted.sleepOver);
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
    const filterSleepOver = assisteds.filter((assisted) => assisted.sleepOver);
    if (filterSleepOver.length >= 20) {
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
        <Form.Label htmlFor="cpf">CPF (Somente Numeros)</Form.Label>
        <Form.Control
          id="cpf"
          type="text"
          placeholder="Insira CPF (SOMENTE NUMEROS)"
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
        <Form.Label htmlFor="shirtNumber">Tamanho da Camisa</Form.Label>
        <Form.Control
          id="shirtNumber"
          type="text"
          placeholder="Insira Tamanho da Camisa"
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

export default AssistedForms;

import {useState, useEffect} from 'react';

function useLocalStorage() {
  const [assistedsArr, setAssisteds] = useState([]);

  const saveAssisteds = () => {
    if (assistedsArr.length !== 0) {
      localStorage.setItem('assistedInfo', JSON.stringify(assistedsArr));
    }
  }

  const getAssisteds = () => {
    const storageAssisted = JSON.parse(localStorage.getItem('assistedInfo'));
    if (Array.isArray(storageAssisted)) {
      setAssisteds(storageAssisted);
      return;
    }
    return localStorage.setItem('assistedInfo', JSON.stringify([]));
  }

  useEffect(() => {
    getAssisteds();
  }
  , []);

  useEffect(() => {
    saveAssisteds();
  }, [assistedsArr]);

  return [assistedsArr, setAssisteds];

  // TODO -> Atualizar o site para não fazer uso do backend, as informações serão salvas no localstorage e pastebin usando a API.
  // Terminar -> Terminar o sistema de salvar as informações no localStorage. É necessario antes de tudo entender a nova estrutura de dados dos assistenciados.
  // A parte de pedidos de oração e comentarios deve estar dentro do objeto do assistenciado, em uma chave nova da qual vai ser um array de objetos? A decidir.
  
}

export default useLocalStorage;
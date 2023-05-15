import {useState, useEffect} from 'react';

function useLocalStorage() {
  const [assisted, setAssisted] = useState([]);
  const storageAssisted = localStorage.getItem('assistedInfo');
  const initialValue = [];
  const allAssisteds = storageAssisted !== null ? JSON.parse(storageAssisted) : undefined;
  if (typeof allAssisteds === 'undefined') {
    localStorage.setItem('assistedInfo', JSON.stringify(initialValue));
  }
  const saveAssisteds = (assisted) => {
    setAssisted(assisted);
    localStorage.setItem('assistedInfo', JSON.stringify(assisted));
  }

  // TODO -> Atualizar o site para não fazer uso do backend, as informações serão salvas no localstorage e pastebin usando a API.
  // Terminar -> Terminar o sistema de salvar as informações no localStorage. É necessario antes de tudo entender a nova estrutura de dados dos assistenciados.
  // A parte de pedidos de oração e comentarios deve estar dentro do objeto do assistenciado, em uma chave nova da qual vai ser um array de objetos? A decidir.
  
}
import { useState, useEffect } from 'react';
import { getAllAssisted } from '../services/requests';

function useFetchAssisted() {
  const [assisteds, setAssisteds] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    // se a data do banco de dados for igual a data de hoje, então mostre...
    // caso a data do banco nao seja a mesma do dia, o codigo ira quebrar. nota para o futuro: arrumar isso?
    getAllAssisted().then((data) => {
      const todayAssisteds = data.filter((assisted) => {
        const today = new Date();
        const assistedDate = new Date(assisted.updatedAt);
        return ( today.getDate() === assistedDate.getDate() && today.getMonth() === assistedDate.getMonth() && today.getFullYear() === assistedDate.getFullYear() );
      });
      setAssisteds(todayAssisteds);
    });
  }, [update]);

  function fetchAssisted() {
    setUpdate(!update);
  }

  return [update, assisteds, fetchAssisted, setUpdate];
}

export default useFetchAssisted;

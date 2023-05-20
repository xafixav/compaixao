import { useState, useEffect } from 'react';

function useTodayAssisteds(assistedsLocalStorage) {
  const [assisteds, setAssisteds] = useState(assistedsLocalStorage);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    // Filtra os assistenciados que foram atualizados hoje (esta busca é feita com base na data de atualização do assistenciado do localStorage)
    // Este filtro existe para fazer a contagem de assistenciados que foram atendidos hoje.
    const todayAssisteds = assisteds.filter((assisted) => {
      const today = new Date();
      const assistedDate = new Date(assisted.updatedAt);
      return ( today.getDate() === assistedDate.getDate() && today.getMonth() === assistedDate.getMonth() && today.getFullYear() === assistedDate.getFullYear() );
    });
    setAssisteds(todayAssisteds);
  }, [update]);

  function fetchAssisted() {
    setUpdate(!update);
  }

  return [update, assisteds, fetchAssisted, setUpdate];
}

export default useTodayAssisteds;

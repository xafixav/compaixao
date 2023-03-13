import { useState, useEffect } from 'react';
import { getAll } from '../services/requests';

function useTodayAssisteds() {
  const [assisteds, setAssisteds] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
      getAll('/assisted/getall').then((data) => {
        setAssisteds(data);
      });
  }, [update]);

  function fetchAssisted() {
    setUpdate(!update);
  }

  return [update, assisteds, fetchAssisted, setUpdate];
}

export default useTodayAssisteds;

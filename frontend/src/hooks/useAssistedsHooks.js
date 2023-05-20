import {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

function useAssistedsHooks() {
  const [assisteds, setAssisted] = useLocalStorage();

  const createAssisted = (assisted) => {
    if (assisteds[-1]?.id === undefined) {
      assisted.id = 0;
    } else {
      assisted.id = assisteds[-1].id + 1;
    }
    assisted.createdAt = new Date();
    assisted.updatedAt = new Date();
    setAssisted([...assisteds, assisted]);
  }

  const updateAssisted = (updatedAssisted) => {
    const index = assisteds.findIndex((assisted) => assisted.id === updatedAssisted.id);
    updatedAssisted.updatedAt = new Date();
    assisteds[index] = {...assisteds[index], ...updatedAssisted};
    setAssisted([...assisteds]);
  }

  const getAssisted = (id) => {
    const index = assisteds.findIndex((assisted) => assisted.id === id);
    return assisteds[index];
  }

  return [assisteds, createAssisted, updateAssisted, getAssisted];
}

export default useAssistedsHooks;
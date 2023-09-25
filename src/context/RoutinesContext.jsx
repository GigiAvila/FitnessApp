import React, { createContext, useCallback, useState, useEffect } from 'react';
import { RoutinesData } from '../data/RoutinesData';
import { v4 as uuidv4 } from 'uuid';


export const RoutinesContext = createContext();

export const RoutinesContextProvider = ({ children }) => {
  const [routines, setRoutines] = useState(() => {
    //LAZY INIT
    const localData = localStorage.getItem('gym-tracker-routines');
    return localData ? JSON.parse(localData) : RoutinesData;
  });

  const addRoutine = useCallback((routine) => {
    setRoutines((prevState) => [...prevState, { ...routine, id: uuidv4() }])

  }, [])

  useEffect(() => {
    localStorage.setItem('gym-tracker-routines', JSON.stringify(routines));
  }, [routines])

  const removeRoutine = useCallback((routineId) => {
    setRoutines((prevState) => prevState.filter((routine) => routine.id !== routineId))
  }, [])

  return (
    <RoutinesContext.Provider value={{ routines, addRoutine, removeRoutine }}>
      {children}
    </RoutinesContext.Provider>
  );
};

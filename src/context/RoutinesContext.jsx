import React, { createContext, useCallback, useState } from 'react';
import { RoutinesData } from '../data/RoutinesData';
import { v4 as uuidv4 } from 'uuid';


export const RoutinesContext = createContext();

export const RoutinesContextProvider = ({ children }) => {
  const [routines, setRoutines] = useState(RoutinesData);

  const addRoutine = useCallback((routine) => {
    setRoutines((prevState) => [...prevState, { ...routine, id: uuidv4() }])

  }, [])

  const removeRoutine = useCallback((routineId) => {
    setRoutines((prevState) => prevState.filter((routine) => routine.id !== routineId))
  }, [])

  return (
    <RoutinesContext.Provider value={{ routines, addRoutine, removeRoutine }}>
      {children}
    </RoutinesContext.Provider>
  );
};

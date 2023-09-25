import React, { createContext, useState, useEffect } from 'react';
import { UserData } from '../data/UserData';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // LAZY INIT
  const [user, setUser] = useState(() => {
    const localData = localStorage.getItem('gym-tracker-user');
    return localData ? JSON.parse(localData) : UserData;
  });

  useEffect(() => {
    localStorage.setItem('gym-tracker-user', JSON.stringify(user));
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

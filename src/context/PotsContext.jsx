import { createContext, useContext, useState } from 'react';
import { mockPots } from '../api/api';

const PotsContext = createContext();
export const PotsProvider = ({ children }) => {
  const [pots, setPots] = useState(mockPots);
  const addPot = (newPot) => {
    setPots([...pots, newPot]);
  };

  const editPot = (updatedPot) => {
    setPots(pots.map((p) => (p.id === updatedPot.id ? updatedPot : p)));
  };

  const deletePot = (id) => {
    setPots(pots.filter((p) => p.id !== id));
  };
  return (
    <PotsContext.Provider value={{ pots, addPot, editPot, deletePot }}>
      {children}
    </PotsContext.Provider>
  );
};

export const usePots = () => {
  return useContext(PotsContext);
};

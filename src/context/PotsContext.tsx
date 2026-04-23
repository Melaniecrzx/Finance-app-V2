import { createContext, useContext, useState } from "react";
import { mockPots } from "../api/api";
import type { Pot } from "../types";

interface PotsContextType {
  pots: Pot[];
  addPot: (value: Pot) => void;
  editPot: (value: Pot) => void;
  deletePot: (value: number) => void;
}

const PotsContext = createContext<PotsContextType | undefined>(undefined);
export const PotsProvider = ({ children }: React.PropsWithChildren) => {
  const [pots, setPots] = useState<Pot[]>(mockPots);
  const addPot = (newPot: Pot) => {
    setPots([...pots, newPot]);
  };

  const editPot = (updatedPot: Pot) => {
    setPots(pots.map((p) => (p.id === updatedPot.id ? updatedPot : p)));
  };

  const deletePot = (id: number) => {
    setPots(pots.filter((p) => p.id !== id));
  };
  return (
    <PotsContext.Provider value={{ pots, addPot, editPot, deletePot }}>
      {children}
    </PotsContext.Provider>
  );
};

export const usePots = (): PotsContextType => {
  const context = useContext(PotsContext);
  if (!context) throw new Error("usePots must be used within PotsProvider");
  return context;
};

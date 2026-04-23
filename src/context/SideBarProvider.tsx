import { createContext, useContext, useState } from "react";

interface SideBarContextType {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: React.PropsWithChildren) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) throw new Error("usePots must be used within SideBar Provider");
  return context;
};

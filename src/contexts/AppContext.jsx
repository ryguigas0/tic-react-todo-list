import { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [creator, setCreator] = useState("Guilherme");

  return (
    <AppContext.Provider value={{ creator }}>{children}</AppContext.Provider>
  );
}

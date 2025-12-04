import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState("valor inicial");
  const [userOn, setUserOn] = useState({
    nome: "",
    email: "",
    genero: "",
    senha: ""
  });

  return (
    <GlobalContext.Provider value={{ state, setState, userOn, setUserOn }}>
      {children}
    </GlobalContext.Provider>
  );
};
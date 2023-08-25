import React, { createContext, useContext } from "react";
import matchesdata from "./matchesdata";

//---------------------------

const MatchContext = createContext();

export const useMatchContext = () => {
  return useContext(MatchContext);
};

export const MatchProvider = ({ children }) => {
  const firstMatch = matchesdata.gamedata[0];

  return (
    <MatchContext.Provider value={{ firstMatch }}>
      {children}
    </MatchContext.Provider>
  );
};

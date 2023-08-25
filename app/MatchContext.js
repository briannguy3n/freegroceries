import React, { createContext, useContext } from "react";
import sportsdata from "./sportsdata";

//---------------------------

const MatchContext = createContext();

export const useMatchContext = () => {
  return useContext(MatchContext);
};

export const MatchProvider = ({ children }) => {
  const firstMatch = sportsdata.gamedata[0];

  return (
    <MatchContext.Provider value={{ firstMatch }}>
      {children}
    </MatchContext.Provider>
  );
};

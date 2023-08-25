import React, { createContext, useContext } from "react";
import matchdata from "./data/gamedata";
import teamLibrary from "./data/teamdata"

//---------------------------

const MatchContext = createContext();

export const useMatchContext = () => {
  return useContext(MatchContext);
};

export const MatchProvider = ({ children }) => {
  const firstMatch = matchdata.gamedata[0];

  return (
    <MatchContext.Provider value={{ firstMatch, teamLibrary }}>
      {children}
    </MatchContext.Provider>
  );
};

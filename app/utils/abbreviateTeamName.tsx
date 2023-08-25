// #region Team Library

interface TeamInfo {
  abbreviation: string;
  city: string;
  mascot: string;
}

export const teamLibrary: Record<string, TeamInfo> = {
  "Pittsburgh Pirates": {
    abbreviation: "PTT",
    city: "Pittsburgh",
    mascot: "Pirates",
  },
  "St. Louis Cardinals": {
    abbreviation: "STL",
    city: "St. Louis",
    mascot: "Cardinals",
  },
};

export default teamLibrary
// #endregion



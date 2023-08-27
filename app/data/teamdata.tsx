// #region Team Library

interface TeamInfo {
  abbreviation: string;
  city: string;
  mascot: string;
  imageLogo: string;
}

export const teamLibrary: Record<string, TeamInfo> = {
  "Pittsburgh Pirates": {
    abbreviation: "PTT",
    city: "Pittsburgh",
    mascot: "Pirates",
    imageLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pittsburgh_Pirates_logo_2014.svg/1200px-Pittsburgh_Pirates_logo_2014.svg.png",
  },
  "St. Louis Cardinals": {
    abbreviation: "STL",
    city: "St. Louis",
    mascot: "Cardinals",
    imageLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLkmonMjcaIOCQbS9MSsCJShnTfIu51HUNqa_75o&s",
  },
};

export default teamLibrary
// #endregion



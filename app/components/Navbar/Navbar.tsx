import NavItem from "./NavItem";
import {
  GiAmericanFootballBall,
  GiPokerHand,
  GiHorseHead,
} from "react-icons/gi";
import { RiTimerFlashFill } from "react-icons/ri";
import { IoLogoGameControllerA } from "react-icons/io";
import { AiFillTrophy, AiFillGift } from "react-icons/ai";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-freegroceries-100 p-4">
      <div className="flex justify-evenly">
        <NavItem title="Sports" icon={<GiAmericanFootballBall />} />
        <NavItem title="Live Betting" icon={<RiTimerFlashFill />} />
        <NavItem title="Casino" icon={<GiPokerHand />} />
        <NavItem title="ESports" icon={<IoLogoGameControllerA />} />
        <NavItem title="Racebook" icon={<GiHorseHead />} />
        <NavItem title="Contests" icon={<AiFillTrophy />} />
        <NavItem title="Promos" icon={<AiFillGift />} />
      </div>
    </nav>
  );
};

export default Navbar;

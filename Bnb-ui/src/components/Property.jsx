/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import {
  PiFarm,
  PiTicket,
  PiCastleTurret,
  PiWarehouse,
  PiPlant,
  PiSwimmingPool,
  PiBeachBall,
  PiMountains,
  PiParachute,
  PiBicycle,
  PiBuilding,
  PiCheers,
} from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";

function Property({ setSelectedCategory }) {
  const categories = [
    { name: "Farm", icon: <PiFarm /> },
    { name: "Icons", icon: <PiTicket /> },
    { name: "Castles", icon: <PiCastleTurret /> },
    { name: "Mansions", icon: <PiWarehouse /> },
    { name: "Bed & Breakfast", icon: <BsCupHot /> },
    { name: "Nature", icon: <PiPlant /> },
    { name: "Pools", icon: <PiSwimmingPool /> },
    { name: "Beaches", icon: <PiBeachBall /> },
    { name: "Mountains", icon: <PiMountains /> },
    { name: "Adventure", icon: <PiParachute /> },
    { name: "Cycling", icon: <PiBicycle /> },
    { name: "Apartments", icon: <PiBuilding /> },
    { name: "Parties", icon: <PiCheers /> },
  ];

  return (
    <div className="flex flex-row items-center gap-20 p-5 overflow-x-auto scroll-smooth scrollbar-hide cursor-pointer ">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
          className="text-3xl text-gray-400 flex flex-col items-center hover:text-red-500"
        >
          {cat.icon}
          <p className="text-center text-sm text-gray-500 font-medium hover:text-red-500">
            {cat.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Property;

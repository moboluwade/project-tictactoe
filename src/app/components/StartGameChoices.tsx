"use client";
import React, { useState } from "react";
import NewGameConnectionButton from "./buttons/NewGameConnectionButton";

const StartGameChoices = () => {
  const [gameId, setGameId] = useState<string>("");

  return (
    <div>
      <div className="flex flex-row w-full">
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          className="w-full "
        />
        <button className="w-24 h-6 bg-blue-400 text-black rounded-2xl">
          Join
        </button>
      </div>
      
      <NewGameConnectionButton />
    </div>
  );
};

export default StartGameChoices;

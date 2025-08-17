"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NewGameConnectionButton = () => {

  const router = useRouter();

  function routeToGame() {
    router.push("/game-room/lead");
  }

  return (
    <div>
      <button
        className="w-24 h-6 bg-white text-black rounded-2xl"
        onClick={routeToGame}
      >
        Start a New Game!
      </button>
    </div>
  );
};

export default NewGameConnectionButton;

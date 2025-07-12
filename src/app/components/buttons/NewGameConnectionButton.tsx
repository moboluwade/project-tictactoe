"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NewGameConnectionButton = () => {
  const [[state1, setState1], [state2,setState2]] = [useState(false), useState(false)];

  useEffect(()=>{
    setState1(true)
    setState2(false)
  },[])

  const [demo, setDemo]= useState(false);
  
  useEffect(()=>{
    setDemo(true)
  },[])

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

import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from "react";

export function HomePage() {
  

  return (
    <div className="flex-row h-full w-auto bg-stone-100  ">
      <NavBar />
      <div className="h-[100000px]"></div>
    </div>
  );
}

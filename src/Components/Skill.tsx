import React, { useState, useEffect } from "react";

interface SkillProps {
  title: string;
  level: number;
}

export default function Skill(props: SkillProps) {
  
  const preccent = props.level * 20;
  // make a variable to store the fracture like 1/5

  return (
    <div className="flex flex-col items-end">
      <h3 className="text-gray-500">{`${props.title} - ${props.level}`}</h3>
      <div className="border-4 border-gray-100 bg-gray-300 w-72 h-4 rounded-full">
        <div className={`w-[${preccent}%] bg-gradient-to-l from-cyan-500 to-blue-500 z-20 h-full rounded-full`}>
        </div>
      </div>
    </div>
  );
}

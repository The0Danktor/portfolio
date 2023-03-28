import React from "react";
import Skill from "./Skill";

interface skill {
    title: string;
    level: number;
}

interface SkillCatagoryProps {
  title: string;
  skills: skill[];
}

export default function SkillCatagory(props: SkillCatagoryProps) {
  return (
    <div className=" flex flex-col items-center mx-6">
      <h2 className="text-lg">{props.title}</h2>
      <div>
        {props.skills.map((skill) => (
            <Skill title={skill.title} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

import React from "react";

interface IntrestsProps {
  title: string;
  logo: JSX.Element;
  text: string;
}

export function Intrests(props: IntrestsProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" w-8 h-8 text-slate-800 rounded-full flex justify-center items-center">
          {props.logo}
        </div>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

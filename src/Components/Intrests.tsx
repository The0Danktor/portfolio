import React from "react";

interface IntrestsProps {
  title: string;
  logo: JSX.Element;
  text: string;
}

export function Intrests(props: IntrestsProps) {
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

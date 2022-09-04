import React from "react";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="flex-align">
      <input className="text-big" type="text" placeholder="Search..." />
      <button className="button text-medium">Search</button>
    </div>
  );
}

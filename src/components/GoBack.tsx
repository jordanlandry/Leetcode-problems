import React from "react";
import { useNavigate } from "react-router";

type Props = {};

export default function GoBack({}: Props) {
  const nav = useNavigate();
  return (
    <div className="clickable text-biggest" onClick={() => nav(-1)}>
      Go Back
    </div>
  );
}

import React from "react";

type Props = { name: string };

export default function Category({ name }: Props) {
  return <span className="category text-normal">{name}</span>;
}

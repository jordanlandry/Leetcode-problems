import React from "react";
import nextId from "react-id-generator";
import data from "../data/data";

export default function HomePage() {
  const aEl = data.map((q) => {
    return (
      <div key={nextId()} className="section">
        <a className="link" href={`/problem/${q.id}`}>
          [{q.id}] {q.name}
        </a>
      </div>
    );
  });
  return (
    <div className="page">
      <div className="link-wrapper text-big section">{aEl}</div>
    </div>
  );
}

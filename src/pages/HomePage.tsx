import React from "react";
import nextId from "react-id-generator";
import Category from "../components/Category";
import Search from "../components/Search";
import data from "../data/data";

export default function HomePage() {
  const aEl = data.map((q) => {
    return (
      <div key={nextId()} className="section">
        <a className="link" href={`/problem/${q.id}`}>
          [{q.id}] {q.name}
        </a>
        <span>
          {q.categories.map((category) => (
            <Category key={nextId()} name={category} />
          ))}
        </span>
      </div>
    );
  });

  return (
    <div className="page">
      <Search />
      <div className="link-wrapper text-big section">{aEl}</div>
    </div>
  );
}

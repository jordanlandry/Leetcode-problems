import React, { useState } from "react";
import nextId from "react-id-generator";
import Category from "../components/Category";
import Filter from "../components/Filter";
import Search from "../components/Search";
import data from "../data/data";

export default function HomePage() {
  const MAX_DISTANCE = 2; // Maximum Levenshtein distance

  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const linkElements = data
    .sort((a, b) => a.id - b.id)
    .filter((a) => {
      if (!filters[0] && !search) return true;

      for (let i = 0; i < filters.length; i++) {
        if (a.categories.includes(filters[i])) return true;
      }

      return false;
    })
    .map((q) => {
      return (
        <div key={nextId()} className="section">
          <a className="link" href={`/problem/${q.id}`}>
            [{q.id}] {q.name}
          </a>
          <span
            className={`diff-${q.difficulty.toLowerCase()} capitalize m-left-med text-medium`}
          >
            {q.difficulty}
          </span>
          <span>
            {q.categories.map((category) => (
              <Category
                key={nextId()}
                name={category}
                setFilters={setFilters}
              />
            ))}
          </span>
        </div>
      );
    });

  const filterElements = filters.map((filter) => {
    return (
      <div>
        <Filter key={nextId()} setFilters={setFilters} name={filter} />
      </div>
    );
  });

  return (
    <div className="page">
      <Search search={search} setSearch={setSearch} />
      <div className="section">
        <div className="text-medium">Filters</div>
        {filterElements}
      </div>
      <div className="link-wrapper text-big section">{linkElements}</div>
    </div>
  );
}

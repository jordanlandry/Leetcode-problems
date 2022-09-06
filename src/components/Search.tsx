import React, { useState } from "react";

type Props = { search: string; setSearch: any };

export default function Search({ setSearch, search }: Props) {
  const handleUpdate = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex-align">
      <input
        className="text-big"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleUpdate}
      />
      <button className="button text-medium">Search</button>
    </div>
  );
}

import React from "react";
import { Route, Routes } from "react-router";
import Problem from "./components/Problem";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problem/:number" element={<Problem />} />
      </Routes>
    </div>
  );
}

export default App;

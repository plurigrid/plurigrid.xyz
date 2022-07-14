import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hatchers from "./Hatchers";
import Landing from "./Landing";
import Matrix from "./Matrix";
import Simulation from "./Simulation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/matrix" element={<Matrix />}/>
        <Route path="/hatchers" element={<Hatchers />}/>
        <Route path="/simulation" element={<Simulation />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
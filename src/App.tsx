import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Matrix from "./Matrix";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing />}/>
        <Route  path="/matrix" element={<Matrix />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
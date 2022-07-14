import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hatchers from "./Hatchers";
import HatchersBegin from "./HatchersBegin";
import Landing from "./Landing";
import Matrix from "./Matrix";
import Simulation from "./Simulation";
import { GrazProvider, configureDefaultChain, mainnetChains } from "graz";
import Level from "./Level";

configureDefaultChain(mainnetChains.cosmos);

function App() {
  return (
    <GrazProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/matrix" element={<Matrix />} />
          <Route path="/hatchers" >
            <Route index element={<Hatchers />} />
            <Route path="/hatchers/begin" element={<HatchersBegin />} />
            <Route path="/hatchers/level/:level/:sublevel" element={<Level />} />
          </Route>
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
      </BrowserRouter>
    </GrazProvider>
  )
}

export default App;
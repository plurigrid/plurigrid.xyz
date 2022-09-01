import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hatchers from "./Hatchers";
import HatchersBegin from "./HatchersBegin";
import Landing from "./Landing";
import Matrix from "./Matrix";
import Simulation from "./Simulation";
import { GrazProvider, mainnetChains, configureGraz } from "graz";
import Level from "./Level";

const url = "https://rpc.constantine-1.archway.tech/"
configureGraz({
  defaultChain: { ...mainnetChains.juno, rpc: url, rest: url },
})

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
import * as React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="menu">
          <a href="#" className="menu-item"><div>Plurigrid</div></a>
          <a href="#" className="menu-item"><div>$MATRIX</div></a>
          <a href="#" className="menu-item"><div>Hatchers</div></a>
          <a href="#" className="menu-item"><div>GitHub</div></a>
          <a href="#" className="menu-item"><div>Signal</div></a>
        </div>
      </header>
      <div className="lead">
        <img src="/public/logo.png" className="logo"  height={300}/>
        <div className="lead-explainer">
          <h1>Plurigrid</h1>
          Plurigrid is building a powerful tool that allows you to own a vertex of an energy grid that guarantees a stable, resilient clean energy supply to your home or business.
        </div>
        {/* The future of pluralistic grids is here. */}
        {/* Plurigrid will instantiate access to the basic right to the public good of sustainable energy. This tool offers an immediate and fair response to any extraneous energy needs-- and bypasses inefficiencies due to cumbersome appeals to your local energy operators-- using blockchain technology that gives you a substantial say in how your local grid is governed. */}
      </div>
    </div>
  );
}

export default App;

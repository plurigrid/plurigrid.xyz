import * as React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="menu">
        <Link to="/" className="menu-item"><div>Plurigrid</div></Link>
        <Link to="/matrix" className="menu-item"><div>$MATRIX</div></Link>
        <Link to="/hatchers" className="menu-item"><div>Hatchers</div></Link>
        <Link to="/simulation" className="menu-item"><div>Simulation</div></Link>
      </div>
    </header>
  );
}

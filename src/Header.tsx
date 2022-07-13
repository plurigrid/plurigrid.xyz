import * as React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="menu">
        <Link to="/" className="menu-item"><div>Plurigrid</div></Link>
        <Link to="/matrix" className="menu-item"><div>$MATRIX</div></Link>
        <a href="#" className="menu-item"><div>Hatchers</div></a>
        <a href="#" className="menu-item"><div>GitHub</div></a>
        <a href="#" className="menu-item"><div>Signal</div></a>
      </div>
    </header>
  );
}

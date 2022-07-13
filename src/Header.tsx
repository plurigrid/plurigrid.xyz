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
        <a href="https://github.com/Plurigrid" className="menu-item"><div>GitHub</div></a>
        <a href="https://signal.group/#CjQKIKpTsS6p5htcrg1caXd2wXWMXhsrPWT2JzvXTR1Ulxr4EhBgKvpKwi24-xw4MhirPsB9" className="menu-item"><div>Signal</div></a>
      </div>
    </header>
  );
}

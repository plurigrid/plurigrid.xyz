import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <div className="menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}><div>Plurigrid</div></NavLink>
        <NavLink to="/matrix" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}><div>$MATRIX</div></NavLink>
        <NavLink to="/hatchers" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}><div>Hatchers</div></NavLink>
        <NavLink to="/simulation" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}><div>Simulation</div></NavLink>
      </div>
    </header>
  );
}

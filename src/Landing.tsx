import * as React from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { Header } from "./Header";
import Socials from "./Socials";

function Landing() {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="lead">
        <img src="/logo.png" className="logo" height={300} />
        <div className="lead-explainer">
          <h1>Plurigrid</h1>
          Plurigrid is building a powerful tool that allows you to own a vertex of an energy grid that guarantees a stable, resilient clean energy supply to your home or business.

          <div className="socials-container">
            <Socials />
          </div>

          <button className="btn btn-primary lead-cta" onClick={() => {
            navigate("/hatchers")
          }}>
            Enter</button>
        </div>
        {/* The future of pluralistic grids is here. */}
        {/* Plurigrid will instantiate access to the basic right to the public good of sustainable energy. This tool offers an immediate and fair response to any extraneous energy needs-- and bypasses inefficiencies due to cumbersome appeals to your local energy operators-- using blockchain technology that gives you a substantial say in how your local grid is governed. */}
      </div>
      <div className="lead">
        <h1>Vision</h1>

        Energy coordination and baseline level of access to electricity is a human right ⚡️🇺🇳

        <ul>
          <li><b>capital efficiency</b> - as a microgrid powered by solar ☀️  - can I go to the market and be sure that I am optimally allocating every $ </li>
          <li><b>value alignment</b> - not violating ethical standards of microgrid users while still coordinating in the grid</li>
          <li><b>resilience</b> - in an event of a transmission failure - climate, war, political upheaval - the grid of grids needs to rapidly reconfigure itself or risk an outage</li>
          <li><b>fraud prevention</b> - shift the enforcement of agreed upon energy distribution rules from human intermediaries / operators to math and code under certain well-understood corruptibility barriers</li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;

